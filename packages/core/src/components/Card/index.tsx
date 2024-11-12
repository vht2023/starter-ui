import { PropsWithChildren } from 'react';
import { cn } from '../../libs/utils';
import { IRadius, IShadows } from '../../types/common';

interface Props {
	id?: string;
	showBorder?: boolean;
	showDivider?: boolean;
	shadow?: IShadows;
	radius?: IRadius;
	className?: string;
}

const getCardRadius = (radius: IRadius) => {
	switch (radius) {
		case 'sm':
			return 'rounded-sm';
		case 'md':
			return 'rounded-md';
		case 'lg':
			return 'rounded-lg';
		case 'full':
			return 'rounded-full';
		default:
			return 'rounded-none';
	}
};

const getCardShadow = (shadow: IShadows) => {
	switch (shadow) {
		case 'sm':
			return 'shadow-md hover:shadow-lg';
		case 'md':
			return 'shadow-lg hover:shadow-xl';
		case 'lg':
			return 'shadow-xl hover:shadow-2xl';
		default:
			return 'shadow-none';
	}
};

const CardHeader = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
	return <div className={cn(['p-3 font-bold text-lg'], className)}>{children}</div>;
};

const CardBody = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
	return <div className={cn(['p-3'], className)}>{children}</div>;
};

const CardFooter = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
	return <div className={cn(['p-3'], className)}>{children}</div>;
};

const Card = ({ id = 'starterui-default-card', showBorder = true, showDivider = false, radius = 'md', shadow = 'md', className, children }: PropsWithChildren<Props>) => {
	return (
		<div
			id={id}
			className={cn(
				['starterui-card w-full transition-all', showBorder && 'border border-grey-light/50', showDivider && 'divide-y', getCardRadius(radius), getCardShadow(shadow)],
				className
			)}
		>
			{children}
		</div>
	);
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
