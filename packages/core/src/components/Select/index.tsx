import { ReactNode, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { cn } from '../../libs/utils';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import Button from '../Button';
import { FileSearch, X } from 'lucide-react';
import Spinner from '../Spinner';

export interface ISelectOptionType {
	value: string;
	name: ReactNode | string;
	color?: string;
	descriptions?: ReactNode | string;
	disabled?: boolean;
	isChildren?: boolean;
	level?: number;
	className?: string;
}

export interface Props {
	id?: string;
	options: ISelectOptionType[];
	value?: string;
	placeholder?: string;
	isLoading?: boolean;
	disabled?: boolean;
	required?: boolean;
	isError?: boolean;
	label?: string;
	helperText?: string;
	clearable?: boolean;
	position?: 'top' | 'bottom';
	color?: string;
	radius?: string;
	size?: string;
	selectorIcon?: ReactNode;
	className?: string;
	labelClassName?: string;
	buttonClassName?: string;
	contentClassName?: string;
	onChange?: (selectedValue: string, selected?: ISelectOptionType) => void;
	onBlur?: () => void;
}

const getSelectColors = (color: string, isActivated: boolean) => {
	switch (color) {
		case 'primary':
			return `hover:border-primary-light focus:ring focus:ring-primary/5 ${isActivated ? 'border-primary-light' : ''}`;
		case 'secondary':
			return `hover:border-secondary-light focus:ring focus:ring-secondary/5 ${isActivated ? 'border-secondary-light' : ''}`;
		case 'success':
			return `hover:border-success-light focus:ring focus:ring-success/5 ${isActivated ? 'border-success-light' : ''}`;
		case 'warning':
			return `hover:border-warning-light focus:ring focus:ring-warning/5 ${isActivated ? 'border-warning-light' : ''}`;
		case 'error':
			return `hover:border-error-light focus:ring focus:ring-error/5 ${isActivated ? 'border-error-light' : ''}`;
		default:
			return `hover:border-default focus:ring focus:ring-default/5 ${isActivated ? 'border-default' : ''}`;
	}
};

const getSelectRadius = (radius: string) => {
	switch (radius) {
		case 'md':
			return 'rounded-lg';
		case 'lg':
			return 'rounded-xl';
		case 'full':
			return 'rounded-full';
		case 'none':
			return 'rounded-none';
		default:
			return 'rounded-md';
	}
};

const getSelectSizes = (size: string) => {
	switch (size) {
		case 'sm':
			return 'text-sm px-2.5 py-1.5';
		case 'lg':
			return 'text-base px-4 py-3';
		default:
			return 'text-base px-3 py-2';
	}
};

const getLabelSizes = (size: string) => {
	switch (size) {
		case 'sm':
			return 'text-sm';
		default:
			return 'text-base';
	}
};

const getPositionClassName = (position: 'top' | 'bottom') => {
	switch (position) {
		case 'bottom':
			return 'top-[calc(100%-4px)] pt-2.5';
		default:
			return '';
	}
};

const getPositionStyle = (position: 'top' | 'bottom', ref: HTMLDivElement | null) => {
	if (ref) {
		switch (position) {
			case 'top':
				return { top: -ref?.offsetHeight - 4 };
			default:
				return {};
		}
	} else return {};
};

const getSelectItemColors = (color: string, isActivated: boolean, isDisabled?: boolean) => {
	if (isDisabled) {
		return 'opacity-50';
	} else {
		switch (color) {
			case 'primary':
				return `${isActivated ? 'bg-primary-light/30' : 'hover:bg-primary-light/20'}`;
			case 'secondary':
				return `${isActivated ? 'bg-secondary-light/30' : 'hover:bg-secondary-light/20 '}`;
			case 'success':
				return ` ${isActivated ? 'bg-success-light/30' : 'hover:bg-success-light/20'}`;
			case 'warning':
				return ` ${isActivated ? 'bg-warning-light/30' : 'hover:bg-warning-light/20'}`;
			case 'error':
				return ` ${isActivated ? 'bg-error-light/30' : 'hover:bg-error-light/20'}`;
			default:
				return ` ${isActivated ? 'bg-grey-light/70' : 'hover:bg-grey-light/50'}`;
		}
	}
};

const Select: React.FC<Props> = ({
	id = 'starterui-default-select',
	options = [],
	placeholder = 'Select...',
	value = '',
	label,
	helperText,
	isLoading = false,
	disabled = false,
	required = false,
	clearable = true,
	isError = false,
	position = 'bottom',
	color = 'default',
	radius = 'md',
	size = 'md',
	selectorIcon,
	className,
	labelClassName,
	buttonClassName,
	contentClassName,
	onChange,
	onBlur,
}) => {
	const selectRef = useRef<HTMLDivElement>(null);
	const contentSelectRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const [show, setShow] = useState<boolean>(false);
	const [selected, setSelected] = useState<ISelectOptionType>();

	const optionsByKey: { [key: string]: ISelectOptionType } = useMemo(() => {
		return options?.length > 0
			? options.reduce((acc, currentItem) => {
					return {
						...acc,
						[currentItem.value]: currentItem,
					};
			  }, {})
			: {};
	}, [options]);

	const onUpdateValueSelect = useCallback(() => {
		const getOpt = optionsByKey[value];

		if (getOpt) {
			setSelected(getOpt);
		}
	}, [optionsByKey, value]);

	const onClearValue = () => {
		if (value && selected) {
			onChange?.('', undefined);
			setSelected(undefined);
		}
	};

	const onClickSelectButton = useCallback(() => {
		setShow(!disabled ? !show : false);
	}, [disabled, show]);

	const onSelectOption = (item: ISelectOptionType) => {
		onChange?.(item.value, item);
		setShow(false);
	};

	useOnClickOutside(selectRef, () => {
		if (show) {
			setShow(false);
			onBlur?.();
		}
	});

	useLayoutEffect(() => {
		if (value && options.length > 0) {
			onUpdateValueSelect();
		}

		return () => {
			setSelected(undefined);
		};
	}, [value, options, onUpdateValueSelect]);

	return (
		<div ref={selectRef} className={cn(['starterui-select-wrapper relative', className])}>
			{/* LABEL */}
			{label && (
				<label htmlFor={id} className={cn(['starterui-select-label mb-1.5 block w-fit text-default', required ? 'starterui-required' : '', getLabelSizes(size), labelClassName])}>
					{label}
				</label>
			)}

			<div className='relative'>
				{/* SELECT BUTTON */}
				<button
					ref={buttonRef}
					id={id + '_btn'}
					type='button'
					disabled={disabled || isLoading}
					onClick={onClickSelectButton}
					className={cn([
						'starterui-select-button inline-flex items-center justify-between whitespace-nowrap transition-all bg-transparent border border-muted/50 w-full min-w-[200px]',
						getSelectRadius(radius),
						getSelectSizes(size),
						((!disabled && !isLoading) || show) && getSelectColors(color, show),
						value.length === 0 ? '[&>span]:text-muted/70' : '[&>span]:text-default',
						disabled ? 'cursor-not-allowed opacity-60' : 'cursor-default',
						isError ? 'border-error hover:border-error focus:ring-error/5' : '',
						buttonClassName,
					])}
				>
					<span className='max-w-[95%] truncate'>{selected?.name || placeholder}</span>

					<div className='flex items-center gap-1'>
						{/* CLEAR SELECTED */}
						{clearable && !isLoading && !disabled && value && selected && (
							<Button
								isIconOnly
								outline
								type='reset'
								className={cn(['border-none p-1 focus:ring-0', disabled ? 'cursor-default' : ''])}
								onClick={(e) => {
									onClearValue();
									e.stopPropagation();
								}}
							>
								<X size={14} className='text-muted/70 hover:text-default' />
							</Button>
						)}

						{/* LOADING ICON & SELECTOR ICON */}
						{selectorIcon ? (
							<div>{selectorIcon}</div>
						) : isLoading ? (
							<Spinner size='sm' isLoading className='border-[#475569b3]' />
						) : (
							<div className={cn(['transition-all', show ? 'rotate-0' : 'rotate-180'])}>
								<svg width='14px' height='14px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
									<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
									<g id='SVGRepo_iconCarrier'>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z'
											fill='#475569b3'
										></path>
									</g>
								</svg>
							</div>
						)}
					</div>
				</button>

				{/* SELECT CONTENT */}
				<div
					id={id}
					ref={contentSelectRef}
					className={cn([
						'starterui-select-content z-10 absolute transition-all min-w-[calc(100%+8px)] -translate-x-1 overflow-hidden rounded-md p-1',
						show ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-1',
						getPositionClassName(position),
						contentClassName,
					])}
					style={{
						...getPositionStyle(position, contentSelectRef?.current),
					}}
				>
					<ul className={cn(['starterui-select-options max-h-96 overflow-y-auto text-default list-none shadow rounded-md bg-white'])} aria-labelledby={id}>
						{options.length === 0 && (
							<div className='p-8 flex flex-col items-center justify-center gap-1.5 text-sm'>
								<FileSearch className='text-muted' size={24} />
								<div className='text-muted'>No Data</div>
							</div>
						)}
						{options.map((option, index) => (
							<li
								key={index}
								onClick={() => (!option?.disabled ? onSelectOption(option) : undefined)}
								className={cn(['starterui-select-item', option?.disabled ? 'cursor-not-allowed' : 'cursor-pointer'])}
							>
								<div className={cn(['rounded-md py-2 px-3 text-default', getSelectItemColors(color, option.value === value, option?.disabled), option.className])}>
									{option.name}
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* HELPER TEXT */}
				{helperText && (
					<p className={cn(['starterui-input-helper-text absolute right-0 top-full mt-1 flex cursor-pointer items-center text-xs', isError ? 'text-error' : ''])}>{helperText}</p>
				)}
			</div>
		</div>
	);
};

export default Select;
