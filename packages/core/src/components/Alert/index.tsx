import { PropsWithChildren } from 'react';
import { IAlertTypes } from '../../types/common';
import { twMerge } from 'tailwind-merge';
import { cn } from '../../libs/utils';
import { CircleCheck, CircleX, Info, TriangleAlert, X } from 'lucide-react';

interface Props {
	type?: IAlertTypes;
	outline?: boolean;
	closeable?: boolean;
	className?: string;
	onClose?: () => void;
}

const getAlertTypes = (type: IAlertTypes) => {
	switch (type) {
		case 'info':
			return 'bg-primary-light/30 text-primary-dark';
		case 'success':
			return 'bg-success-light/20 text-success-dark';
		case 'warning':
			return 'bg-warning-light/20 text-warning-dark';
		case 'error':
			return 'bg-error-light/20 text-error-dark';
		default:
			return 'bg-muted/10 text-default';
	}
};

const getAlertOutlines = (type: IAlertTypes) => {
	switch (type) {
		case 'info':
			return 'border border-primary-light';
		case 'success':
			return 'border border-success-light';
		case 'warning':
			return 'border border-warning-light';
		case 'error':
			return 'border border-error-light';
		default:
			return 'border border-muted/70';
	}
};

const getAlertIcons = (type: IAlertTypes) => {
	switch (type) {
		case 'info':
			return <Info size={18} />;
		case 'success':
			return <CircleCheck size={18} />;
		case 'warning':
			return <TriangleAlert size={18} />;
		case 'error':
			return <CircleX size={18} />;
		default:
			return <Info size={18} />;
	}
};

const getAlertCloseIcons = (type: IAlertTypes, onClose?: () => void) => {
	switch (type) {
		case 'info':
			return (
				<div className='ms-2 -mr-1.5 flex-shrink-0 p-1 cursor-pointer rounded-lg hover:bg-primary-light/20' onClick={onClose}>
					<X size={18} />
				</div>
			);
		case 'success':
			return (
				<div className='ms-2 -mr-1.5 flex-shrink-0 p-1 cursor-pointer rounded-lg hover:bg-success-light/20' onClick={onClose}>
					<X size={18} />
				</div>
			);
		case 'warning':
			return (
				<div className='ms-2 -mr-1.5 flex-shrink-0 p-1 cursor-pointer rounded-lg hover:bg-warning-light/30' onClick={onClose}>
					<X size={18} />
				</div>
			);
		case 'error':
			return (
				<div className='ms-2 -mr-1.5 flex-shrink-0 p-1 cursor-pointer rounded-lg hover:bg-error-light/20' onClick={onClose}>
					<X size={18} />
				</div>
			);
		default:
			return (
				<div className='ms-2 -mr-1.5 flex-shrink-0 p-1 cursor-pointer rounded-lg hover:bg-muted/15' onClick={onClose}>
					<X size={18} />
				</div>
			);
	}
};

const Alert = ({ type = 'default', outline = false, closeable = true, className, children, onClose }: PropsWithChildren<Props>) => {
	return (
		<div className={twMerge(cn(['p-4 rounded-lg flex items-start font-medium text-base', type && getAlertTypes(type), outline && getAlertOutlines(type), className]))} role='alert'>
			<div className='mt-[3px] flex-shrink-0 inline me-2'>{getAlertIcons(type)}</div>
			<div className='grow'>{children}</div>
			{closeable && getAlertCloseIcons(type, onClose)}
		</div>
	);
};

export default Alert;
