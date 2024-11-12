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
	placement?: 'right' | 'left';
	showBackdrop?: boolean;
	contentClassName?: string;
	backdropClassName?: string;
	headerClassName?: string;
	className?: string;
	onHide: () => void;
	onClickOutside?: () => void;
}

interface PortalProps {
	id: string;
	onClose: () => void;
}

function DrawerPortal({ id, children, onClose }: PropsWithChildren<PortalProps>) {
	// create div element only once using ref
	const containerRef = useRef<HTMLDivElement | null>(null);

	if (!containerRef.current) containerRef.current = document.createElement('div');

	const root = document.getElementById('root')!;
	const el = containerRef.current!;

	useEffect(() => {
		el.id = id;
		root.appendChild(el);

		return () => {
			root.removeChild(el);
		};
	}, []);

	return ReactDOM.createPortal(
		<KeyboardListener
			id={id}
			onClose={() => {
				onClose();
			}}
			portals={root}
		>
			{children}
		</KeyboardListener>,
		containerRef.current
	);
}

const getPlacementClassName = (show: boolean, placement: 'right' | 'left') => {
	if (!show) {
		if (placement === 'right') {
			return 'translate-x-full';
		} else return '-translate-x-full';
	} else {
		return 'translate-x-0';
	}
};

const Drawer = ({
	id,
	show = false,
	title = 'Drawer Title',
	placement = 'right',
	showBackdrop = true,
	contentClassName,
	backdropClassName,
	headerClassName,
	className,
	children,
	onHide,
	onClickOutside,
}: PropsWithChildren<Props>) => {
	const drawerContainerRef = useRef<HTMLDivElement>(null);

	return (
		<DrawerPortal id={id} onClose={onHide}>
			{show && showBackdrop && (
				<Backdrop
					onClick={() => {
						onClickOutside?.();
						onHide();
					}}
					className={backdropClassName}
				/>
			)}
			<div
				ref={drawerContainerRef}
				className={cn([
					'starterui-drawer fixed z-50 h-screen bg-white top-0 p-4 pt-3 overflow-hidden transition-transform duration-300 w-96 border space-y-3 shadow',
					placement === 'right' ? 'right-0' : 'left-0',
					getPlacementClassName(show, placement),
					className,
				])}
			>
				<div className={cn(['starterui-drawer-header flex items-center justify-between', headerClassName])}>
					<h5 className='inline-flex items-center text-default font-medium'>{title}</h5>
					<Button isIconOnly type='reset' className='border-none p-1 bg-transparent hover:bg-grey-light' onClick={onHide}>
						<X size={16} />
					</Button>
				</div>
				<div className={cn(['starterui-drawer-content w-full h-[calc(100%-36px)] overflow-auto', contentClassName])}>{children}</div>
			</div>
		</DrawerPortal>
	);
};

export default Drawer;
