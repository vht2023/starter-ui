import React from 'react';
import { IColors, ISizes } from '../../types/common';
import { cn } from '../../libs/utils';

interface Props {
	id?: string;
	isLoading?: boolean;
	size?: ISizes;
	color?: IColors | 'white';
	className?: string;
}

const getSpinnerSizes = (size: ISizes) => {
	switch (size) {
		case 'sm':
			return 'w-3 h-3 border';
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
		case 'default':
			return 'border-default';
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

const Spinner: React.FC<Props> = ({ id = 'starterui-default-spinner', isLoading = true, size = 'md', color = 'default', className }) => {
	return (
		<div
			id={id}
			className={cn([
				'starterui-spinner animate-spin rounded-full border-2 border-solid',
				size && getSpinnerSizes(size),
				color && getSpinnerColors(color),
				isLoading ? 'block' : 'hidden',
				className,
				'border-t-transparent',
			])}
		/>
	);
};

export default Spinner;
