import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
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
			return 'rounded-md';
		case 'md':
			return 'rounded-lg';
		case 'lg':
			return 'rounded-xl';
		case 'full':
			return 'rounded-full';
		default:
			return 'rounded-none';
	}
};

const getCardShadow = (shadow: IShadows) => {
	switch (shadow) {
		case 'sm':
			return 'shadow';
		case 'md':
			return 'shadow-lg';
		case 'lg':
			return 'shadow-xl';
		default:
			return 'shadow-none';
	}
};

const CardHeader = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
	return <div className={twMerge(cn(['p-2', className]))}>{children}</div>;
};

const CardBody = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
	return <div className={twMerge(cn(['p-2', className]))}>{children}</div>;
};

const CardFooter = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
	return <div className={twMerge(cn(['p-2', className]))}>{children}</div>;
};

const Card = ({ id = 'default-card', showBorder = true, showDivider = false, radius = 'md', shadow = 'sm', className, children }: PropsWithChildren<Props>) => {
	return (
		<div id={id} className={twMerge(cn(['w-full', showBorder && 'border', showDivider && 'divide-y', getCardRadius(radius), getCardShadow(shadow), className]))}>
			{children}
		</div>
	);
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
