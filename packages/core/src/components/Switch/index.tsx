import { ReactNode } from 'react';
import { IColors } from '../../types/common';
import { cn } from '../../libs/utils';
import { div } from 'framer-motion/client';

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

const getSwitchColors = (color: IColors) => {
	switch (color) {
		case 'primary':
			return `group-has-[:checked]:before:bg-primary group-has-[:checked]:shadow-[0_0_0_2px_rgba(0,111,238,0.5),_0_0_8px_rgba(0,111,238,0.7)]`;
		case 'secondary':
			return `group-has-[:checked]:before:bg-secondary group-has-[:checked]:shadow-[0_0_0_2px_rgba(120,40,200,0.5),_0_0_8px_rgba(120,40,200,0.7)]`;
		case 'success':
			return `group-has-[:checked]:before:bg-success group-has-[:checked]:shadow-[0_0_0_2px_rgba(23,201,100,0.5),_0_0_8px_rgba(23,201,100,0.7)]`;
		case 'warning':
			return `group-has-[:checked]:before:bg-warning group-has-[:checked]:shadow-[0_0_0_2px_rgba(245,165,36,0.5),_0_0_8px_rgba(245,165,36,0.7)]`;
		case 'error':
			return `group-has-[:checked]:before:bg-error group-has-[:checked]:shadow-[0_0_0_2px_rgba(220,38,38,0.5),_0_0_8px_rgba(220,38,38,0.7)]`;
		default:
			return `group-has-[:checked]:before:bg-default group-has-[:checked]:shadow-[0_0_0_2px_rgba(17,24,28,0.5),_0_0_8px_rgba(17,24,28,0.7)]`;
	}
};

const Switch: React.FC<Props> = ({ id = 'starterui-default-switch', color = 'default', label, checked, disabled = false, className, onChange, onClick }) => {
	return (
		<div id={id} className={cn(['starterui-switch flex items-center gap-1.5', className])}>
			<label className='starterui-switch-group group relative w-10 h-5'>
				<input type='checkbox' disabled={disabled} checked={checked} onChange={(e) => onChange?.(e.target.checked)} onClick={onClick} className='hidden' />
				<span
					className={cn([
						'starterui-switch-slider border border-transparent before:-translate-x-1/2 group-has-[:checked]:before:translate-x-1/2 ',
						getSwitchColors(color),
						disabled
							? 'cursor-default before:bg-grey shadow-[0_0_0_1px_rgba(212,212,216,1),_0_0_2px_rgba(212,212,216,1)]'
							: 'cursor-pointer before:bg-default/50 shadow-[0_0_0_1px_rgba(17,24,28,0.3),_0_0_2px_rgba(17,24,28,0.3)]',
					])}
				/>
			</label>
			<span className='starterui-switch-label leading-none'>{label}</span>
		</div>
	);
};

export default Switch;
