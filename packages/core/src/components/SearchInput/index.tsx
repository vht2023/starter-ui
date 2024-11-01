import React, { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode, useRef } from 'react';
import { cn } from '../../libs/utils';
import { ISizes } from '../../types/common';
import Spinner from '../Spinner';
import { Search, X } from 'lucide-react';
import Button from '../Button';

export interface Props {
	id?: string;
	value?: string | number | undefined;
	isLoading?: boolean;
	size?: ISizes;
	disabled?: boolean;
	placeholder?: string;
	autoFocus?: boolean;
	variant?: 'flat' | 'underlined' | 'bordered';
	inputClassName?: string;
	className?: string;
	onChange?: (inputValue: string) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, value: string, handleBlurInput?: () => void) => void;
	onBlur?: () => void;
	onFocus?: () => void;
	onClearSearch?: () => void;
	onSearch?: () => void;
}

const getInputSizes = (size: ISizes) => {
	switch (size) {
		case 'sm':
			return 'px-6 py-1.5 text-sm placeholder:text-sm';
		case 'lg':
			return 'px-6 py-3 text-base placeholder:text-base';
		default:
			return 'px-6 py-2 text-base placeholder:text-base';
	}
};

const getInputVariants = (variant?: 'flat' | 'underlined' | 'bordered') => {
	switch (variant) {
		case 'bordered':
			return 'border-default focus:ring focus:ring-default/10';
		case 'underlined':
			return 'focus:outline-none border-transparent';
		default:
			return 'focus:border-default border-transparent focus:ring focus:ring-default/10';
	}
};

const SearchInput: React.FC<Props> = ({
	id = 'starterui-default-search-input',
	value = '',
	size = 'md',
	isLoading = false,
	disabled = false,
	autoFocus = false,
	placeholder = 'Search...',
	variant = 'flat',
	inputClassName,
	className,
	onChange = () => {},
	onKeyDown = () => {},
	onBlur = () => {},
	onFocus = () => {},
	onClearSearch = () => {},
	onSearch = () => {},
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleBlurInput = () => {
		inputRef?.current?.blur();
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') onSearch?.();
		onKeyDown?.(event, value.toString(), handleBlurInput);
	};

	return (
		<div className={cn(['starterui-search-input-wrapper group relative', className])}>
			{/* SEARCH ICON */}
			<div className='absolute left-1.5 -translate-y-1/2 top-1/2 py-1'>
				<Search size={14} />
			</div>

			{/* INPUT */}
			<input
				id={id}
				ref={inputRef}
				type='text'
				disabled={disabled || isLoading}
				autoFocus={autoFocus}
				className={cn(
					[
						'starterui-search-input block w-full rounded-md border border-muted text-default outline-none shadow-md placeholder:text-muted/50 duration-300 transition-all ease-in-out',
						size && getInputSizes(size),
						getInputVariants(variant),
						disabled ? 'bg-disabled/50' : 'bg-white',
					],
					inputClassName
				)}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
				value={value}
				onKeyDown={handleKeyDown}
				onBlur={onBlur}
				onFocus={onFocus}
				list='autocompleteOff'
			/>

			{/* LOADING */}
			<div className='absolute right-0 z-10 -translate-y-1/2 top-1/2'>
				{isLoading ? (
					<div className='p-1'>
						<Spinner size='sm' isLoading />
					</div>
				) : (
					<Button
						isIconOnly
						outline
						type='reset'
						className={cn(['border-none p-1 focus:ring-0', disabled && 'cursor-default'])}
						onClick={() => {
							onChange('');
							onClearSearch?.();
							inputRef?.current?.focus();
						}}
					>
						<X size={14} />
					</Button>
				)}
			</div>

			{variant === 'underlined' && <span className='starterui-search-input-underlined w-0 group-has-[:focus]:w-full' />}
		</div>
	);
};

export default SearchInput;
