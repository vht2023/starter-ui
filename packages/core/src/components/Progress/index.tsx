import React, { ReactNode, useMemo } from 'react';
import { cn } from '../../libs/utils';

interface Props {
	id?: string;
	percent: number;
	size?: string;
	color?: string;
	type?: 'line' | 'circle';
	radius?: 'full' | 'none';
	insideLabel?: ReactNode;
	showStatus?: boolean;
	className?: string;
	progressClassName?: string;
}

const getLineProgressSizes = (size: string) => {
	switch (size) {
		case 'sm':
			return 'h-1.5 after:h-1.5';
		case 'lg':
			return 'h-4 after:h-4';

		default:
			return 'h-2.5 after:h-2.5';
	}
};

const getCircleProgressSizes = (size: string) => {
	switch (size) {
		case 'sm':
			return 'w-20 h-20';
		case 'lg':
			return 'w-40 h-40';

		default:
			return 'w-32 h-32';
	}
};

const getLineProgressColors = (color: string) => {
	switch (color) {
		case 'primary':
			return 'bg-primary text-white after:bg-primary-light';
		case 'secondary':
			return 'bg-secondary text-white after:bg-secondary-light';
		case 'success':
			return 'bg-success text-default after:bg-success-light';
		case 'warning':
			return 'bg-warning text-default after:bg-warning-light';
		case 'error':
			return 'bg-error text-white after:bg-error-light';
		default:
			return 'bg-default text-white after:bg-white/30';
	}
};

const getCircleProgressColors = (color: string) => {
	switch (color) {
		case 'primary':
			return 'text-primary';
		case 'secondary':
			return 'text-secondary';
		case 'success':
			return 'text-success';
		case 'warning':
			return 'text-warning';
		case 'error':
			return 'text-error';
		default:
			return 'text-default';
	}
};

const getProgressStatusColors = (color: string) => {
	switch (color) {
		case 'primary':
			return 'bg-primary text-white before:bg-primary';
		case 'secondary':
			return 'bg-secondary text-white before:bg-secondary';
		case 'success':
			return 'bg-success text-default before:bg-success';
		case 'warning':
			return 'bg-warning text-default before:bg-warning';
		case 'error':
			return 'bg-error text-white before:bg-error';
		default:
			return 'bg-default text-white before:bg-default';
	}
};

const getStylesWithInsideLabel = () => {
	return 'p-[1px] h-fit text-xs after:h-full';
};

const Progress: React.FC<Props> = ({
	id = 'starterui-default-progress',
	percent = 0,
	size = 'md',
	color = 'default',
	type = 'line',
	radius = 'full',
	showStatus = false,
	insideLabel,
	className,
	progressClassName,
}) => {
	const isShowInsideLabel = useMemo(() => insideLabel !== null && insideLabel !== undefined, [insideLabel]);

	if (type === 'circle') {
		return (
			<div id={id} className={cn(['relative', getCircleProgressSizes(size), className])}>
				<svg className='size-full -rotate-90' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='18' cy='18' r='16' fill='none' className='stroke-current text-grey/70' stroke-width='2'></circle>
					{percent > 0 && (
						<circle
							cx='18'
							cy='18'
							r='16'
							fill='none'
							className={cn(['stroke-current transition-all duration-300 delay-100', getCircleProgressColors(color)])}
							stroke-width='2'
							stroke-dasharray='100'
							stroke-dashoffset={100 - percent}
							stroke-linecap={radius === 'full' ? 'round' : 'none'}
						></circle>
					)}
				</svg>
				{(showStatus || isShowInsideLabel) && (
					<div className='absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2'>
						<span className={cn(['text-center font-medium transition-all duration-300 delay-100', getCircleProgressColors(color)])}>
							{isShowInsideLabel ? insideLabel : `${percent}%`}
						</span>
					</div>
				)}
			</div>
		);
	}

	return (
		<div id={id} className={cn(['relative w-full bg-grey/70 rounded-full', radius === 'full' ? 'rounded-full after:rounded-full' : 'rounded-none after:rounded-none', className])}>
			<div
				className={cn([
					'starterui-progress relative text-white text-center leading-nonetransition-all delay-100 duration-300 overflow-hidden',
					radius === 'full' ? 'rounded-full after:rounded-full' : 'rounded-none after:rounded-none',
					getLineProgressSizes(size),
					isShowInsideLabel && getStylesWithInsideLabel(),
					getLineProgressColors(color),
					progressClassName,
				])}
				style={{ width: `${percent}%` }}
			>
				{insideLabel}
			</div>
			{showStatus && (
				<span
					className={cn([
						'starterui-progress-status absolute -right-3 -top-7 text-xs p-1 leading-none transition-all delay-100 duration-300 rounded z-10 w-fit -translate-x-1/2',
						getProgressStatusColors(color),
					])}
					style={{ left: `${percent}%` }}
				>
					{percent}%
				</span>
			)}
		</div>
	);
};

export default Progress;
