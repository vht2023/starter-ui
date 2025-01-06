import React, { useMemo } from 'react';
import { cn } from '../../libs/utils';
import { Check, X } from 'lucide-react';

interface Props {
	id?: string;
	title: string;
	description?: string;
	status?: string;
	disabled?: boolean;
	number: number;
	current: number;
	clickable?: boolean;
	direction: 'horizontal' | 'vertical';
	isLastItem?: boolean;
	className?: string;
	onChange?: (value: number) => void;
}

const getStep = (number: number, status: string, title: string, description?: string) => {
	switch (status) {
		case 'finish':
			return (
				<div className='flex gap-2 items-center'>
					<div
						className={cn([
							'transition-all duration-300 flex items-center justify-center w-9 h-9 font-medium rounded-full bg-[#dbeafe] text-primary border border-transparent group-hover:border-primary',
						])}
					>
						<Check width={18} height={18} />
					</div>
					<div className='transition-all duration-300 group-hover:text-primary space-y-1.5'>
						<div className='font-medium'>{title}</div>
						{description && <div className='absolute text-sm w-full'>{description}</div>}
					</div>
				</div>
			);
		case 'process':
			return (
				<div className='flex gap-2 items-center'>
					<div className={cn(['transition-all duration-300 flex items-center justify-center font-medium w-9 h-9 rounded-full bg-primary text-white border border-transparent'])}>
						{number}
					</div>
					<div className='transition-all duration-300 text-primary space-y-1.5'>
						<div className='font-medium'>{title}</div>
						{description && <div className='absolute text-sm'>{description}</div>}
					</div>
				</div>
			);
		case 'wait':
			return (
				<div className='flex gap-2 items-center'>
					<div
						className={cn([
							'transition-all duration-300 flex items-center justify-center font-medium w-9 h-9 rounded-full text-muted/50 bg-grey/80 border border-transparent group-hover:border-primary group-hover:text-primary',
						])}
					>
						{number}
					</div>
					<div className='transition-all duration-300 text-muted/50 group-hover:text-primary space-y-1.5'>
						<div className='font-medium'>{title}</div>
						{description && <div className='absolute text-sm'>{description}</div>}
					</div>
				</div>
			);
		case 'error':
			return (
				<div className='flex gap-2 items-center'>
					<div className={cn(['transition-all duration-300 flex items-center justify-center font-medium w-9 h-9 rounded-full text-white bg-error border border-transparent'])}>
						<X width={18} height={18} />
					</div>
					<div className='transition-all duration-300 text-error space-y-1.5'>
						<div className='font-medium'>{title}</div>
						{description && <div className='absolute text-sm'>{description}</div>}
					</div>
				</div>
			);
		case 'disabled':
			return (
				<div className='flex gap-2 items-center'>
					<div className={cn(['transition-all duration-300 flex items-center justify-center font-medium w-9 h-9 rounded-full text-muted/50 bg-grey/80 border border-transparent'])}>
						{number}
					</div>
					<div className='transition-all duration-300 text-muted/50 space-y-1.5'>
						<div className='font-medium'>{title}</div>
						{description && <div className='absolute text-sm'>{description}</div>}
					</div>
				</div>
			);
		default:
			return null;
	}
};

const Step: React.FC<Props> = ({ id, number, title, description, status, clickable, disabled = false, direction, isLastItem, current, className, onChange }) => {
	const stepStatus = useMemo(() => {
		if (status) return status;
		else if (disabled) return 'disabled';
		else if (number < current) return 'finish';
		else if (number === current) return 'process';
		else return 'wait';
	}, [number, current, status]);

	return (
		<div
			id={id}
			className={cn([
				'relative group flex gap-2',
				direction === 'horizontal' ? 'flex-row items-center' : 'flex-col w-full',
				disabled ? 'cursor-not-allowed' : number !== current && clickable ? 'cursor-pointer' : 'cursor-text',
				className,
			])}
			onClick={() => !disabled && clickable && onChange?.(number)}
		>
			{getStep(number, stepStatus, title, description)}
			{!isLastItem && (
				<div
					className={cn([
						'flex-auto transition-all duration-300',
						direction === 'horizontal' ? 'h-0.5' : 'w-0.5 ml-[18px]',
						disabled || current <= number ? 'bg-disabled' : 'bg-primary-light/50',
					])}
				/>
			)}
		</div>
	);
};

export default Step;
