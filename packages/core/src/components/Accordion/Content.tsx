import { PropsWithChildren, useContext } from 'react';
import { AccordionContext } from './Container';
import { AccordionItemContext } from './Item';
import { twMerge } from 'tailwind-merge';
import { cn } from '../../libs/utils';

const Content = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
	const { activatedKeys } = useContext(AccordionContext);

	const { itemId, loading } = useContext(AccordionItemContext);

	const isOpen = !loading && activatedKeys.includes(itemId);

	return (
		<div id={`accordion-body-${itemId}`} className={twMerge(cn(['duration-300 transition-all overflow-hidden ease-in-out', isOpen ? 'max-h-full' : 'max-h-0', className]))}>
			{children}
		</div>
	);
};

export default Content;
