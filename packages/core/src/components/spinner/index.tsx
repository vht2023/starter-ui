import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IColors, ISizes } from '../../types/common';
import { cn } from '../../libs/utils';

interface Props {
	isLoading: boolean;
	size?: ISizes;
	color?: IColors | 'white';
	className?: string;
}

const getSpinnerSizes = (size: ISizes) => {
	switch (size) {
		case 'sm':
			return 'w-3 h-3';
		case 'md':
			return 'w-4 h-4';
		case 'lg':
			return 'w-6 h-6';

		default:
			return 'w-4 h-4';
	}
};

const getSpinnerColors = (color: IColors | 'white') => {
	switch (color) {
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
			return 'border-white';
	}
};

const Spinner: React.FC<Props> = ({ isLoading = true, size = 'md', color = 'default', className }) => {
	return (
		<div
			className={twMerge(
				cn([
					'animate-spin rounded-full border-2 border-solid',
					size && getSpinnerSizes(size),
					color && getSpinnerColors(color),
					isLoading ? 'block border-t-transparent' : 'hidden',
					className,
				])
			)}
		/>
	);
};

export default Spinner;
