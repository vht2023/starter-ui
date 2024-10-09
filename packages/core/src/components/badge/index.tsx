import React, { CSSProperties, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { IColors, ISizes } from '../../types/common';
import { cn } from '../../libs/utils';

interface Props {
	className?: string;
	color?: IColors;
	size?: ISizes;
	disabled?: boolean;
	outline?: boolean;
	style?: CSSProperties;
}

const badgeColors = (color: IColors, outline: boolean) => {
	switch (color) {
		case 'default':
			return `text-default bg-grey ${outline && 'border-default'}`;
		case 'primary':
			return `text-white bg-primary ${outline && 'border-primary text-primary'}`;
		case 'secondary':
			return `text-white bg-secondary ${outline && 'border-secondary text-primary'}`;
		case 'success':
			return `text-default bg-success ${outline && 'border-success text-success'}`;
		case 'warning':
			return `text-default bg-warning ${outline && 'border-warning text-warning'}`;
		case 'error':
			return `text-white bg-error ${outline && 'border-error text-error'}`;
		default:
			return `text-default bg-grey ${outline && 'border-default'}`;
	}
};

const badgeSizes = (size: ISizes, outline: boolean) => {
	switch (size) {
		case 'sm':
			return 'text-sm px-2 py-1 rounded-md';
		case 'md':
			return `text-md px-3 py-2 rounded-lg ${outline && 'border-[1.5px]'}`;
		case 'lg':
			return `text-lg px-4 py-3 rounded-xl ${outline && 'border-[2px]'}`;
		default:
			return `text-md px-3 py-2 rounded-lg ${outline && 'border-[1.5px]'}`;
	}
};

const Badge = ({ color = 'default', size = 'md', className, style, disabled = false, outline = false, children }: PropsWithChildren<Props>) => {
	return (
		<div
			className={twMerge(
				cn([
					'inline-flex items-center justify-start whitespace-nowrap',
					badgeColors(color, outline),
					badgeSizes(size, outline),
					outline && 'border bg-transparent',
					disabled && 'cursor-not-allowed opacity-60',
				]),
				className
			)}
			style={{
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default Badge;
