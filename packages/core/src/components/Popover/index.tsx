import { PropsWithChildren, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../../libs/utils';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { IPlacementTypes } from '../../types/common';

interface Props {
	id?: string;
	disabled?: boolean;
	open?: boolean;
	bordered?: boolean;
	showArrow?: boolean;
	placement?: IPlacementTypes;
	trigger?: 'click' | 'hover';
	renderButton?: ReactNode;
	className?: string;
	buttonClassName?: string;
	overlayClassName?: string;
	contentClassName?: string;
	onOpenChange?: (open: boolean) => void;
	onClickOutside?: () => void;
}

const getPlacementClassName = (placement: IPlacementTypes) => {
	switch (placement) {
		case 'top':
			return 'left-1/2 -translate-x-1/2 pb-2.5';
		case 'top-start':
			return 'left-0 pb-2.5 -translate-x-1';
		case 'top-end':
			return 'right-0 pb-2.5 translate-x-1';
		case 'bottom':
			return 'top-[calc(100%-2px)] left-1/2 -translate-x-1/2 pt-2.5';
		case 'bottom-start':
			return 'top-[calc(100%-2px)] left-0 pt-2.5 -translate-x-1';
		case 'bottom-end':
			return 'top-[calc(100%-2px)] right-0 pt-2.5 translate-x-1';
		case 'left':
			return 'top-1/2 -translate-y-1/2 pr-2.5';
		case 'left-start':
			return 'top-0 pr-2.5 -translate-y-1';
		case 'left-end':
			return 'bottom-0 pr-2.5 translate-y-1';
		case 'right':
			return 'left-[calc(100%-2px)] top-1/2 -translate-y-1/2 pl-2.5';
		case 'right-start':
			return 'left-[calc(100%-2px)] top-0 pl-2.5 -translate-y-1';
		case 'right-end':
			return 'left-[calc(100%-2px)] bottom-0 pl-2.5 translate-y-1';
		default:
			return '';
	}
};

const getPlacementStyle = (placement: IPlacementTypes, ref: HTMLDivElement | null) => {
	if (ref) {
		switch (placement) {
			case 'top':
			case 'top-start':
			case 'top-end':
				return { top: -ref?.offsetHeight + 2 };
			case 'left':
			case 'left-start':
			case 'left-end':
				return { left: -ref?.offsetWidth + 2 };
			default:
				return {};
		}
	} else return {};
};

const getPlacementArrowClassName = (placement: IPlacementTypes, show: boolean) => {
	if (show) {
		switch (placement) {
			case 'top':
				return 'before:rotate-45 before:bottom-1.5 before:left-[calc(50%-4px)]';
			case 'top-start':
				return 'before:rotate-45 before:bottom-1.5';
			case 'top-end':
				return 'before:rotate-45 before:bottom-1.5 before:left-[calc(100%-24px)]';
			case 'bottom':
				return 'before:rotate-[225deg] before:top-1.5 before:left-[calc(50%-4px)]';
			case 'bottom-start':
				return 'before:rotate-[225deg] before:top-1.5';
			case 'bottom-end':
				return 'before:rotate-[225deg] before:top-1.5 before:left-[calc(100%-24px)]';
			case 'left':
				return 'before:-rotate-45 before:left-[calc(100%-14px)] before:top-[calc(50%-4px)]';
			case 'left-start':
				return 'before:-rotate-45 before:left-[calc(100%-14px)] before:top-3';
			case 'left-end':
				return 'before:-rotate-45 before:left-[calc(100%-14px)] before:bottom-3';
			case 'right':
				return 'before:-rotate-[225deg] before:left-1.5 before:top-[calc(50%-4px)]';
			case 'right-start':
				return 'before:-rotate-[225deg] before:left-1.5 before:top-3';
			case 'right-end':
				return 'before:-rotate-[225deg] before:left-1.5 before:bottom-3';
			default:
				return '';
		}
	} else return 'before:hidden';
};

const Popover = ({
	id = 'starterui-default-popover',
	children,
	open = false,
	disabled = false,
	bordered = true,
	showArrow = true,
	placement = 'top',
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

	const dropdownContentStyle = { ...getPlacementStyle(placement, contentDropdownRef?.current) };

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
		<div ref={dropdownRef} className={cn(['starterui-popover-wrapper relative', className])}>
			<div
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onClick={onClickDropdown}
				className={cn(['starterui-popover-button relative', disabled ? 'cursor-not-allowed' : 'cursor-pointer', buttonClassName])}
			>
				{renderButton}
			</div>
			<div
				id={id}
				ref={contentDropdownRef}
				className={cn([
					'starterui-popover-content w-max z-10 absolute transition-all overflow-hidden rounded-md p-1',
					show ? 'visible opacity-100' : 'invisible opacity-0',
					getPlacementClassName(placement),
					contentClassName,
				])}
				style={dropdownContentStyle}
				onMouseLeave={onMouseLeave}
			>
				<div
					className={cn([
						'starterui-popover-overlay overflow-y-auto p-2.5 text-sm text-default rounded-md bg-white shadow',
						bordered && 'border before:border-r before:border-b',
						getPlacementArrowClassName(placement, showArrow),
						overlayClassName,
					])}
					aria-labelledby={id}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Popover;
