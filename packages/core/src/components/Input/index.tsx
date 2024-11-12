import React, { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode, useRef } from 'react';
import { cn } from '../../libs/utils';
import { IColors, IRadius, ISizes } from '../../types/common';
import Spinner from '../Spinner';

export interface Props {
	id?: string;
	type?: HTMLInputTypeAttribute;
	label?: string;
	value?: string | number | undefined;
	isLoading?: boolean;
	size?: ISizes;
	radius?: IRadius;
	color?: IColors;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string;
	autoComplete?: string;
	autoFocus?: boolean;
	isReadOnly?: boolean;
	isError?: boolean;
	helperText?: string;
	labelClassName?: string;
	inputClassName?: string;
	prefixClassName?: string;
	suffixClassName?: string;
	className?: string;
	prefix?: ReactNode;
	suffix?: ReactNode;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, value: string, handleBlurInput?: () => void) => void;
	onBlur?: () => void;
	onFocus?: () => void;
	suffixOnClick?: () => void;
}

const getLabelSizes = (size: ISizes) => {
	switch (size) {
		case 'sm':
			return 'text-sm';
		default:
			return 'text-base';
	}
};

const getInputSizes = (size: ISizes) => {
	switch (size) {
		case 'sm':
			return 'px-2.5 py-1.5 text-sm placeholder:text-sm';
		case 'lg':
			return 'px-4 py-3 text-base placeholder:text-base';
		default:
			return 'px-3 py-2 text-base placeholder:text-base';
	}
};

const getInputRadius = (radius: IRadius) => {
	switch (radius) {
		case 'sm':
			return 'rounded-md';
		case 'md':
			return 'rounded-lg';
		case 'lg':
			return 'rounded-xl';
		case 'full':
			return 'rounded-full';
		case 'none':
			return 'rounded-none';
		default:
			return '';
	}
};

const getInputColors = (color: IColors) => {
	switch (color) {
		case 'primary':
			return `hover:border-primary-light focus:border-primary-light focus:ring focus:ring-primary/5`;
		case 'secondary':
			return `hover:border-secondary-light focus:border-secondary-light focus:ring focus:ring-secondary/5`;
		case 'success':
			return `hover:border-success-light focus:border-success-light focus:ring focus:ring-success/5`;
		case 'warning':
			return `hover:border-warning-light focus:border-warning-light focus:ring focus:ring-warning/5`;
		case 'error':
			return `hover:border-error-light focus:border-error-light focus:ring focus:ring-error/5`;
		default:
			return `hover:border-default focus:border-default focus:ring focus:ring-default/5`;
	}
};

const Input: React.FC<Props> = ({
	id = 'starterui-default-input',
	type = 'text',
	label = '',
	value = '',
	isLoading,
	size = 'md',
	radius = 'sm',
	color = 'default',
	required = false,
	disabled = false,
	autoFocus = false,
	isReadOnly = false,
	isError = false,
	placeholder = 'Placeholder',
	autoComplete = '',
	helperText = '',
	labelClassName,
	inputClassName,
	prefixClassName,
	suffixClassName,
	className,
	prefix = null,
	suffix = null,
	onChange = () => {},
	onKeyDown = () => {},
	onBlur = () => {},
	onFocus = () => {},
	suffixOnClick,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleBlurInput = () => {
		inputRef?.current?.blur();
	};

	return (
		<div className={cn(['starterui-input-wrapper', className])}>
			{/* LABEL */}
			{label && (
				<label
					htmlFor={id}
					className={cn(['starterui-input-label mb-1.5 block w-fit text-default', required && 'starterui-required', size && getLabelSizes(size)], labelClassName)}
				>
					{label}
				</label>
			)}
			<div className='relative'>
				{/* PREFIX ICON */}
				{prefix && (
					<div className={cn(['pointer-events-none absolute inset-y-0 left-0 flex items-center ps-2.5 start-0', isError && '[&_svg]:text-error'], prefixClassName)}>{prefix}</div>
				)}

				{/* INPUT */}
				<input
					id={id}
					ref={inputRef}
					type={type}
					disabled={disabled || isLoading}
					autoFocus={autoFocus}
					className={cn(
						[
							'starterui-input block w-full placeholder-gray-500 border border-muted/50 text-default outline-none placeholder:text-muted/50 transition-all ease-in-out',
							getInputSizes(size),
							getInputRadius(radius),
							!disabled && getInputColors(color),
							prefix && 'pl-8',
							suffix && 'pr-8',
							disabled ? 'bg-disabled/50' : 'bg-white',
							isError && 'border-error hover:border-error focus:border-error focus:ring-error/5',
						],
						inputClassName
					)}
					placeholder={placeholder}
					onWheel={() => type === 'number' && inputRef.current?.blur()}
					onChange={onChange}
					value={value}
					onKeyDown={(e) => onKeyDown?.(e, value.toString(), handleBlurInput)}
					onBlur={onBlur}
					onFocus={onFocus}
					autoComplete={autoComplete}
					list='autocompleteOff'
					readOnly={isReadOnly}
				/>

				{/* suffix ICON */}
				{suffix && !isLoading && (
					<div
						className={cn(['absolute inset-y-0 right-0 z-10 flex cursor-pointer items-center pe-2.5 end-0', isError && '[&_svg]:text-error'], suffixClassName)}
						onClick={suffixOnClick}
					>
						{suffix}
					</div>
				)}

				{/* HELPER TEXT */}
				{helperText && (
					<p className={cn(['starterui-input-helperText absolute right-0 top-full z-10 mt-1 flex cursor-pointer items-center text-xs', isError && 'text-error'])}>{helperText}</p>
				)}

				{/* LOADING */}
				{isLoading && (
					<div className='absolute inset-y-0 right-0 z-10 flex items-center pr-3'>
						<Spinner size='sm' isLoading />
					</div>
				)}
			</div>
		</div>
	);
};

export default Input;
