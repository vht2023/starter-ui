import React, { ReactNode } from 'react';
import { IColors } from '../../types/common';
import { twMerge } from 'tailwind-merge';
import { cn } from '../../libs/utils';

interface Props {
	id: string;
	label?: ReactNode | string;
	checked?: boolean;
	disabled?: boolean;
	color?: IColors;
	className?: string;
	onChange?: (value: boolean) => void;
	onClick?: (e: any) => void;
}

const getCheckboxColors = (color: IColors) => {
	switch (color) {
		case 'primary':
			return 'group-hover:border-primary before:bg-primary group-has-[:checked]:bg-primary group-has-[:checked]:border-primary';
		case 'secondary':
			return 'group-hover:border-secondary before:bg-secondary group-has-[:checked]:bg-secondary group-has-[:checked]:border-secondary';
		case 'success':
			return 'group-hover:border-success before:bg-success group-has-[:checked]:bg-success group-has-[:checked]:border-success';
		case 'warning':
			return 'group-hover:border-warning before:bg-warning group-has-[:checked]:bg-warning group-has-[:checked]:border-warning';
		case 'error':
			return 'group-hover:border-error before:bg-error group-has-[:checked]:bg-error group-has-[:checked]:border-error';
		default:
			return 'group-hover:border-default before:bg-default group-has-[:checked]:bg-default group-has-[:checked]:border-default';
	}
};

const Checkbox: React.FC<Props> = ({ id = 'default-checkbox', color = 'default', label, checked, disabled, className, onChange, onClick }) => {
	const getLabel = () => {
		if (typeof label === 'string') {
			return <span>{label}</span>;
		} else return label;
	};
	return (
		<div className={twMerge(cn(['starterui-checkbox-wrapper group', className]))}>
			<input
				type='checkbox'
				id={id}
				checked={checked}
				disabled={disabled}
				onChange={(e) => onChange?.(e.target.checked)}
				onClick={onClick}
				className='starterui-input-checkbox hidden invisible peer'
			/>
			<label htmlFor={id} className='starterui-label-checkbox select-none cursor-pointer'>
				<span
					className={twMerge(
						cn(['mr-2 border relative w-5 h-5 rounded align-middle scale-100 transition-all ease-in-out duration-200 border-muted', color && getCheckboxColors(color)])
					)}
				>
					<svg viewBox='0 0 12 10' height='10px' width='12px'>
						<polyline points='1.5 6 4.5 9 10.5 1'></polyline>
					</svg>
				</span>
				{getLabel()}
			</label>
		</div>
	);
};

export default Checkbox;