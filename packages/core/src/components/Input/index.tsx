import React, { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode, useRef } from 'react';
import { cn } from '../../libs/utils';
import { ISizes } from '../../types/common';
import Spinner from '../Spinner';

export interface Props {
	id?: string;
	type?: HTMLInputTypeAttribute;
	label?: string;
	value?: string | number | undefined;
	isLoading?: boolean;
	size?: ISizes;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string;
	autoComplete?: string;
	autoFocus?: boolean;
	allowClearSearch?: boolean;
	isReadOnly?: boolean;
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

const Input: React.FC<Props> = ({
	id = 'default-input',
	type = 'text',
	label = '',
	value = '',
	isLoading,
	size = 'md',
	required = false,
	disabled = false,
	autoFocus = false,
	allowClearSearch = true,
	isReadOnly = false,
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
		<div className={className}>
			{/* LABEL */}
			{label && (
				<label htmlFor={id} className={cn(['mb-1.5 block w-fit font-700 text-default', required && 'starterui-required', size && getLabelSizes(size)], labelClassName)}>
					{label}
				</label>
			)}
			<div className='relative'>
				{/* PREFIX ICON */}
				{prefix && (
					<div className={cn(['pointer-events-none absolute inset-y-0 left-0 flex items-center ps-2.5 start-0', helperText && '[&_svg]:text-error'], prefixClassName)}>
						{prefix}
					</div>
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
							'block w-full rounded-md border border-muted text-default outline-none placeholder:text-muted/50 focus:border-primary focus:ring-primary transition-all ease-in-out',
							size && getInputSizes(size),
							prefix && 'pl-8',
							suffix && 'pr-8',
							helperText && 'border-error',
							disabled ? 'bg-disabled' : 'bg-white',
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
						className={cn(['absolute inset-y-0 right-0 z-10 flex cursor-pointer items-center pe-2.5 end-0', helperText && '[&_svg]:text-error'], suffixClassName)}
						onClick={suffixOnClick}
					>
						{suffix}
					</div>
				)}

				{/* HELPER TEXT */}
				{helperText && <p className='starterui-input-helperText absolute right-0 top-full z-10 mt-1 flex cursor-pointer items-center text-xs text-error'>{helperText}</p>}

				{/* LOADING */}
				{isLoading && (
					<div className='absolute inset-y-0 right-0 z-10 flex items-center pr-3'>
						<Spinner size={size} isLoading />
					</div>
				)}
			</div>
		</div>
	);
};

export default Input;
