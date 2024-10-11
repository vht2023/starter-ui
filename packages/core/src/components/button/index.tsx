import React, { PropsWithChildren, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { IButtonTypes, IColors, IRadius, ISizes } from '../../types/common';
import { cn } from '../../libs/utils';

interface Props {
	id?: string;
	color?: IColors;
	size?: ISizes;
	type?: IButtonTypes;
	radius?: IRadius;
	disabled?: boolean;
	outline?: boolean;
	isIconOnly?: boolean; // ONLY ICON
	isLoading?: boolean;
	startIcon?: ReactNode | null;
	endIcon?: ReactNode | null;
	className?: string;
	onClick?: () => void;
}

const buttonColors = (color: IColors, shouldHover: boolean, outline: boolean) => {
	switch (color) {
		case 'default':
			return `[&_div]:text-default bg-grey focus:ring-grey/70 ${shouldHover && 'hover:bg-grey-dark'} ${outline && 'outline-default'}`;
		case 'primary':
			return `[&_div]:text-white bg-primary focus:ring-primary/70 ${shouldHover && 'hover:bg-primary-dark'} ${outline && 'outline-primary [&_div]:text-primary'}`;
		case 'secondary':
			return `[&_div]:text-white bg-secondary focus:ring-secondary/70 ${shouldHover && 'hover:bg-secondary-dark'} ${outline && 'outline-secondary [&_div]:text-primary'}`;
		case 'success':
			return `[&_div]:text-default bg-success focus:ring-success/70 ${shouldHover && 'hover:bg-success-dark'} ${outline && 'outline-success [&_div]:text-success'}`;
		case 'warning':
			return `[&_div]:text-default bg-warning focus:ring-warning/70 ${shouldHover && 'hover:bg-warning-dark'} ${outline && 'outline-warning [&_div]:text-warning'}`;
		case 'error':
			return `[&_div]:text-white bg-error focus:ring-error/70 ${shouldHover && 'hover:bg-error-dark'} ${outline && 'outline-error [&_div]:text-error'}`;
		default:
			return `[&_div]:text-default bg-grey focus:ring-default/70 ${shouldHover && 'hover:bg-grey-dark'} ${outline && 'outline-default'}`;
	}
};

const buttonOutline = (color: IColors) => {
	switch (color) {
		case 'default':
			return 'outline-default [&_div]:text-default';
		case 'primary':
			return 'outline-primary [&_div]:text-primary';
		case 'secondary':
			return 'outline-secondary [&_div]:text-secondary';
		case 'success':
			return 'outline-success [&_div]:text-success';
		case 'warning':
			return 'outline-warning [&_div]:text-warning';
		case 'error':
			return 'outline-error [&_div]:text-error';
		default:
			return 'outline-default [&_div]:text-default';
	}
};

const buttonSizes = (size: ISizes, isIconOnly: boolean) => {
	switch (size) {
		case 'sm':
			return `text-sm rounded-md ${isIconOnly ? 'p-2' : 'px-4 py-2'}`;
		case 'md':
			return `text-md rounded-lg ${isIconOnly ? 'p-3' : 'px-6 py-3'}`;
		case 'lg':
			return `text-lg rounded-xl ${isIconOnly ? 'p-4' : 'px-8 py-4'}`;
		default:
			return `text-sm rounded-md ${isIconOnly ? 'p-2' : 'px-4 py-2'}`;
	}
};

const buttonRadius = (radius: IRadius) => {
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

const loadingColors = (color: IColors, outline: boolean) => {
	if (outline) {
		switch (color) {
			case 'default':
				return 'border-t-transparent border-black';
			case 'primary':
				return 'border-primary';
			case 'secondary':
				return 'border-secondary';
			case 'success':
				return 'border-success';
			case 'warning':
				return 'border-warning';
			case 'error':
				return 'border-error';
			default:
				return 'border-black';
		}
	} else return 'border-t-transparent border-white';
};

const Button = ({
	id = 'buttonId',
	color = 'default',
	size = 'md',
	type = 'button',
	radius = 'md',
	className,
	disabled = false,
	outline = false,
	isLoading = false,
	isIconOnly = false,
	startIcon = null,
	endIcon = null,
	children,
	onClick,
}: PropsWithChildren<Props>) => {
	/* ======== ONLY ICON ======== */
	const renderOnlyIcon = () => (
		<React.Fragment>
			{isLoading ? (
				<div className='flex-center'>
					<div
						className={twMerge(cn(['h-4 w-4 animate-spin rounded-full border-2 border-solid', loadingColors(color, outline), isLoading ? 'block border-t-transparent' : 'hidden']))}
					/>
				</div>
			) : (
				children
			)}
		</React.Fragment>
	);

	/* ======== ICON + CHILDREN ======== */
	const renderChildren = () => (
		<div className={twMerge(cn(['flex-center w-full', isLoading && 'gap-2']))}>
			<div
				className={twMerge(cn(['h-4 w-4 animate-spin rounded-full border-2 border-solid', loadingColors(color, outline), isLoading ? 'block border-t-transparent' : 'hidden']))}
			/>
			<div className='flex-center gap-2'>
				{!isLoading && startIcon && startIcon}
				{children}
				{endIcon && endIcon}
			</div>
		</div>
	);

	return (
		<button
			id={id}
			type={type}
			disabled={disabled || isLoading}
			onClick={onClick}
			className={twMerge(
				cn([
					'flex-center whitespace-nowrap text-center font-medium transition-transform transform active:scale-95 focus:ring',
					buttonColors(color, !disabled && !isLoading && !outline, outline),
					buttonSizes(size, isIconOnly),
					buttonRadius(radius),
					outline && `bg-transparent outline outline-offset-0 hover:opacity-70 ${buttonOutline(color)}`,
					disabled && 'cursor-not-allowed opacity-60',
					isLoading && 'cursor-wait opacity-70',
					isIconOnly ? 'min-w-fit' : 'min-w-20',
				]),
				className
			)}
		>
			{isIconOnly ? renderOnlyIcon() : renderChildren()}
		</button>
	);
};

export default Button;
