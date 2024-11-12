import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { cn } from '../../libs/utils';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

interface Props {
	id?: string;
	disabled?: boolean;
	open?: boolean;
	bordered?: boolean;
	align?: 'center' | 'start' | 'end';
	position?: 'top' | 'bottom';
	trigger?: 'click' | 'hover';
	renderButton?: ReactNode;
	className?: string;
	buttonClassName?: string;
	overlayClassName?: string;
	contentClassName?: string;
	onOpenChange?: (open: boolean) => void;
	onClickOutside?: () => void;
}

interface DropdownItemProps {
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
}

const DropdownContext = createContext<{
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	show: false,
	setShow: () => false,
});

const getAlignClassName = (align: 'center' | 'start' | 'end') => {
	switch (align) {
		case 'start':
			return 'left-0';
		case 'end':
			return 'right-0';
		default:
			return 'left-1/2 -translate-x-1/2';
	}
};

const getPositionClassName = (position: 'top' | 'bottom') => {
	switch (position) {
		case 'bottom':
			return 'top-[calc(100%-2px)] pt-2.5';
		default:
			return '';
	}
};

const getPositionStyle = (position: 'top' | 'bottom', ref: HTMLDivElement | null) => {
	if (ref) {
		switch (position) {
			case 'top':
				return { top: -ref?.offsetHeight - 10 };
			default:
				return {};
		}
	} else return {};
};

const Dropdown = ({
	id = 'starterui-default-dropdown',
	children,
	open = false,
	disabled = false,
	bordered = true,
	align = 'end',
	position = 'bottom',
	trigger = 'click',
	className,
	buttonClassName,
	overlayClassName,
	contentClassName,
	renderButton,
	onOpenChange,
	onClickOutside,
}: PropsWithChildren<Props>) => {
	const dropdownRef = useRef<HTMLDivElement>(null);
	const contentDropdownRef = useRef<HTMLDivElement>(null);
	const [show, setShow] = useState<boolean>(open);

	useEffect(() => {
		if (onOpenChange) onOpenChange(show);
	}, [show]);

	useOnClickOutside(dropdownRef, () => {
		if (show) {
			setShow(false);
			onClickOutside?.();
		}
	});

	const onClickDropdown = useCallback(() => {
		if (trigger === 'click') setShow(!disabled ? !show : false);
		else return;
	}, [disabled, show, trigger]);

	const onMouseEnter = () => {
		if (trigger === 'click') return;

		setShow(true);
	};

	const onMouseLeave = (event: any) => {
		if (trigger === 'click' || (dropdownRef.current && dropdownRef.current.contains(event.relatedTarget))) return;
		setShow(false);
	};

	return (
		<div ref={dropdownRef} className={cn(['starterui-dropdown-wrapper relative', className])}>
			<div
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onClick={onClickDropdown}
				className={cn(['starterui-dropdown-button relative', disabled ? 'cursor-not-allowed' : 'cursor-pointer', buttonClassName])}
			>
				{renderButton}
			</div>
			<div
				id={id}
				ref={contentDropdownRef}
				className={cn([
					'starterui-dropdown-content z-10 absolute transition-all min-w-[200px] overflow-hidden rounded-md p-1',
					show ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-1',
					getAlignClassName(align),
					getPositionClassName(position),
					contentClassName,
				])}
				style={{
					...getPositionStyle(position, contentDropdownRef?.current),
				}}
				onMouseLeave={onMouseLeave}
			>
				<ul
					className={cn([
						'starterui-dropdown-overlay max-h-96 overflow-y-auto p-1.5 text-sm text-default list-none shadow rounded-md bg-white',
						bordered && 'border',
						overlayClassName,
					])}
					aria-labelledby={id}
				>
					<DropdownContext.Provider value={{ show, setShow }}>{children}</DropdownContext.Provider>
				</ul>
			</div>
		</div>
	);
};

const DropdownItem = ({ children, disabled = false, className, onClick }: PropsWithChildren<DropdownItemProps>) => {
	const { setShow } = useContext(DropdownContext);
	return (
		<li
			className={cn(
				['starterui-dropdown-item group flex w-full items-center gap-2 rounded-md p-2'],
				disabled ? 'cursor-not-allowed text-grey-dark' : 'cursor-pointer text-default hover:bg-grey-light/70',
				className
			)}
			onClick={() => {
				if (!disabled && onClick) {
					onClick();
					setShow(false);
				}
			}}
		>
			{children}
		</li>
	);
};

Dropdown.Item = DropdownItem;

export default Dropdown;
