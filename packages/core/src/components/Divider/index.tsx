import { ReactNode } from 'react';
import { cn } from '../../libs/utils';

interface Props {
	id?: string;
	label?: ReactNode | string;
	type?: string;
	color?: string;
	className?: string;
	labelClassName?: string;
}

const getDividerColors = (color: string) => {
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
		case 'gray':
			return 'border-muted/50';
		default:
			return 'border-default';
	}
};

const getDividerTypes = (type: string) => {
	switch (type) {
		case 'dashed':
			return 'border-dashed';
		case 'dotted':
			return 'border-dotted';
		default:
			return 'border-solid';
	}
};

const Divider: React.FC<Props> = ({ id = 'starterui-default-divider', label, type = 'solid', color = 'default', className, labelClassName }) => {
	return (
		<div id={id} className='starterui-divider inline-flex items-center justify-center w-full'>
			<div className={cn(['w-full h-0 border-b my-3', type && getDividerTypes(type), color && getDividerColors(color)], className)} />
			{label && <span className={cn(['absolute px-3 text-default -translate-x-1/2 bg-white left-1/2 leading-none'], labelClassName)}>{label}</span>}
		</div>
	);
};

export default Divider;
