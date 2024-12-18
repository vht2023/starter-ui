import { PropsWithChildren, ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import KeyboardListener from '../KeyboardListener';
import { cn } from '../../libs/utils';
import Button from '../Button';
import { X } from 'lucide-react';
import Backdrop from '../Backdrop';

export interface Props {
	id: string;
	show: boolean;
	title?: ReactNode | string;
	footer?: ReactNode;
	showBackdrop?: boolean;
	showFooter?: boolean;
	showCancel?: boolean;
	showSubmit?: boolean;
	loadingSubmit?: boolean;
	submitText?: string;
	cancelText?: string;
	contentClassName?: string;
	backdropClassName?: string;
	headerClassName?: string;
	footerClassName?: string;
	className?: string;
	onSubmit?: () => void;
	onHide: () => void;
	onClickOutside?: () => void;
}

interface PortalProps {
	id: string;
	onClose: () => void;
}

function ModalPortal({ id, children, onClose }: PropsWithChildren<PortalProps>) {
	const containerRef = useRef<HTMLDivElement>();
	const portalsRef = useRef<HTMLElement>();

	if (!containerRef.current) containerRef.current = document.createElement('div');

	if (!document?.getElementById('portals')) {
		portalsRef.current = document.createElement('div');
		portalsRef.current.id = 'portals';
		document.body.appendChild(portalsRef.current);
	} else portalsRef.current = document?.getElementById('portals')!;

	const el = containerRef?.current!;

	useEffect(() => {
		el.id = id;
		portalsRef.current?.appendChild(el);

		return () => {
			portalsRef.current?.removeChild(el);
		};
	}, []);

	return ReactDOM.createPortal(
		<KeyboardListener
			id={id}
			onClose={() => {
				onClose();
			}}
			portals={portalsRef?.current}
		>
			{children}
		</KeyboardListener>,
		containerRef.current
	);
}

const Modal = ({
	id,
	show = false,
	title = 'Modal Title',
	footer,
	showBackdrop = true,
	showSubmit = true,
	showCancel = true,
	showFooter = true,
	loadingSubmit = false,
	submitText = 'OK',
	cancelText = 'Cancel',
	contentClassName,
	backdropClassName,
	headerClassName,
	footerClassName,
	className,
	children,
	onSubmit,
	onHide,
	onClickOutside,
}: PropsWithChildren<Props>) => {
	const modalContainerRef = useRef<HTMLDivElement>(null);

	const handleSubmit = () => {
		onSubmit?.();
		onHide();
	};

	return (
		<ModalPortal id={id} onClose={onHide}>
			{showBackdrop && (
				<Backdrop
					onClick={() => {
						onClickOutside?.();
						onHide();
					}}
					className={cn(['transition-all duration-300', show ? 'opacity-50 z-50' : 'opacity-0 -z-50', backdropClassName])}
				/>
			)}
			<div
				ref={modalContainerRef}
				className={cn([
					'starterui-modal fixed z-[999] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-500 overflow-hidden bg-white p-4 pt-3 min-w-[480px] backdrop-blur max-h-[calc(100vh-80px)] border rounded-md shadow-md space-y-4',
					show ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
					className,
				])}
			>
				<div className={cn(['starterui-modal-header flex items-center justify-between', headerClassName])}>
					<h5 className='inline-flex items-center text-default font-medium'>{title}</h5>
					<Button isIconOnly type='reset' className='border-none p-1 bg-transparent hover:bg-grey-light' onClick={onHide}>
						<X size={16} />
					</Button>
				</div>

				<div className={cn(['starterui-modal-content max-h-[calc(100vh-200px)] overflow-auto', contentClassName])}>{children}</div>

				{showFooter &&
					(footer || (
						<div className={cn(['starterui-modal-footer w-full flex items-center justify-end gap-3', footerClassName])}>
							{showCancel && (
								<Button className='text-default border-grey-dark hover:border-error [&_div]:hover:text-error font-normal' outline size='sm' onClick={onHide}>
									{cancelText}
								</Button>
							)}
							{showSubmit && (
								<Button size='sm' color='primary' onClick={handleSubmit} disabled={loadingSubmit} isLoading={loadingSubmit}>
									{submitText}
								</Button>
							)}
						</div>
					))}
			</div>
		</ModalPortal>
	);
};

export default Modal;
