import React, { PropsWithChildren, ReactNode } from 'react';

import { cn } from '../../libs/utils';
import Spinner from '../Spinner';

interface Props {
	id?: string;
	color?: string;
	size?: string;
	type?: 'button' | 'submit' | 'reset';
	radius?: string;
	disabled?: boolean;
	outline?: boolean;
	isIconOnly?: boolean; // ONLY ICON
	isLoading?: boolean;
	startIcon?: ReactNode | null;
	endIcon?: ReactNode | null;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const getButtonColors = (color: string, shouldHover: boolean, outline: boolean) => {
	switch (color) {
		case 'primary':
			return `[&_div]:text-white bg-primary focus:ring-primary/40 ${shouldHover ? 'hover:bg-primary-dark' : ''} ${outline ? 'border-primary [&_div]:text-primary' : ''}`;
		case 'secondary':
			return `[&_div]:text-white bg-secondary focus:ring-secondary/40 ${shouldHover ? 'hover:bg-secondary-dark' : ''} ${outline ? 'border-secondary [&_div]:text-primary' : ''}`;
		case 'success':
			return `[&_div]:text-default bg-success focus:ring-success/40 ${shouldHover ? 'hover:bg-success-dark' : ''} ${outline ? 'border-success [&_div]:text-success' : ''}`;
		case 'warning':
			return `[&_div]:text-default bg-warning focus:ring-warning/40 ${shouldHover ? 'hover:bg-warning-dark' : ''} ${outline ? 'border-warning [&_div]:text-warning' : ''}`;
		case 'error':
			return `[&_div]:text-white bg-error focus:ring-error/40 ${shouldHover ? 'hover:bg-error-dark' : ''} ${outline ? 'border-error [&_div]:text-error' : ''}`;
		case 'black':
			return `[&_div]:text-white bg-default focus:ring-default/40 ${shouldHover ? 'hover:bg-default/80' : ''} ${outline ? 'border-default [&_div]:text-default' : ''}`;
		default:
			return `[&_div]:text-default bg-grey focus:ring-grey/40 ${shouldHover ? 'hover:bg-grey-dark' : ''} ${outline ? 'border-default' : ''}`;
	}
};

const buttonOutline = (color: string) => {
	switch (color) {
		case 'primary':
			return 'border-primary [&_div]:text-primary';
		case 'secondary':
			return 'border-secondary [&_div]:text-secondary';
		case 'success':
			return 'border-success [&_div]:text-success';
		case 'warning':
			return 'border-warning [&_div]:text-warning';
		case 'error':
			return 'border-error [&_div]:text-error';
		default:
			return 'border-default [&_div]:text-default';
	}
};

const getButtonSizes = (size: string, isIconOnly: boolean) => {
	switch (size) {
		case 'sm':
			return `text-sm rounded-md ${isIconOnly ? 'p-2' : 'px-3 py-2'}`;
		case 'lg':
			return `text-lg rounded-xl ${isIconOnly ? 'p-4' : 'px-6 py-3'}`;
		default:
			return `text-base rounded-lg ${isIconOnly ? 'p-3' : 'px-4 py-2.5'}`;
	}
};

const getButtonRadius = (radius: string) => {
	switch (radius) {
		case 'sm':
			return 'rounded-sm';
		case 'md':
			return 'rounded-md';
		case 'lg':
			return 'rounded-lg';
		case 'full':
			return 'rounded-full';
		case 'none':
			return 'rounded-none';
		default:
			return '';
	}
};

const Button = ({
	id = 'starterui-default-button',
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
	const renderOnlyIcon = () => <React.Fragment>{isLoading ? <Spinner isLoading={isLoading} color={outline ? color : 'white'} /> : children}</React.Fragment>;

	/* ======== ICON + CHILDREN ======== */
	const renderChildren = () => (
		<div className={cn(['flex items-center justify-center w-full', isLoading ? 'gap-2' : ''])}>
			<Spinner isLoading={isLoading} color={outline ? color : 'white'} />
			<div className='flex items-center justify-center gap-2 text-center'>
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
			className={cn([
				'starterui-button flex items-center justify-center whitespace-nowrap text-center font-normal transition-all transform',
				getButtonColors(color, !disabled && !isLoading && !outline, outline),
				getButtonSizes(size, isIconOnly),
				getButtonRadius(radius),
				outline ? `bg-transparent border hover:opacity-70 ${buttonOutline(color)}` : '',
				disabled ? 'cursor-not-allowed opacity-60' : '',
				isLoading ? 'cursor-wait opacity-70' : '',
				!disabled && !isLoading ? 'active:scale-95 focus:ring-2' : '',
				isIconOnly ? 'min-w-fit' : 'min-w-20',
				className,
			])}
		>
			{isIconOnly ? renderOnlyIcon() : renderChildren()}
		</button>
	);
};

export default Button;
