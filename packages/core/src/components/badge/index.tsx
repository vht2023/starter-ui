import { PropsWithChildren } from 'react';

import { cn } from '../../libs/utils';

interface Props {
	id?: string;
	className?: string;
	color?: string;
	size?: string;
	disabled?: boolean;
	outline?: boolean;
}

const getBadgeColors = (color: string, outline: boolean) => {
	switch (color) {
		case 'primary':
			return `text-white bg-primary ${outline ? 'border-primary text-primary' : ''}`;
		case 'secondary':
			return `text-white bg-secondary ${outline ? 'border-secondary text-primary' : ''}`;
		case 'success':
			return `text-default bg-success ${outline ? 'border-success text-success' : ''}`;
		case 'warning':
			return `text-default bg-warning ${outline ? 'border-warning text-warning' : ''}`;
		case 'error':
			return `text-white bg-error ${outline ? 'border-error text-error' : ''}`;
		default:
			return `text-default bg-grey ${outline ? 'border-default' : ''}`;
	}
};

const getBadgeSizes = (size: string, outline: boolean) => {
	switch (size) {
		case 'sm':
			return 'text-sm px-2 py-1.5 rounded-md';
		case 'md':
			return `text-base px-3 py-2 rounded-lg ${outline ? 'border-[1.5px]' : ''}`;
		case 'lg':
			return `text-lg px-4 py-3 rounded-xl ${outline ? 'border-[2px]' : ''}`;
		default:
			return 'text-sm px-2 py-1.5 rounded-md';
	}
};

const Badge = ({ id = 'starterui-default-badge', color = 'default', size = 'sm', className, disabled = false, outline = false, children }: PropsWithChildren<Props>) => {
	return (
		<div
			id={id}
			className={cn([
				'starterui-badge inline-flex items-center justify-start w-fit h-fit whitespace-nowrap',
				getBadgeColors(color, outline),
				getBadgeSizes(size, outline),
				outline ? 'border bg-transparent' : '',
				disabled ? 'cursor-not-allowed opacity-60' : '',
				className,
			])}
		>
			{children}
		</div>
	);
};

export default Badge;
