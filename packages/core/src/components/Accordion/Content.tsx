import { PropsWithChildren, useContext } from 'react';
import { AccordionContext } from './Container';
import { AccordionItemContext } from './Item';
import { twMerge } from 'tailwind-merge';
import { cn } from '../../libs/utils';

const Content = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
	const { activatedKeys } = useContext(AccordionContext);

	const { itemId, loading, isDisabled } = useContext(AccordionItemContext);

	const isOpen = !loading && activatedKeys.includes(itemId);

	return (
		<div
			id={`accordion-body-${itemId}`}
			className={twMerge(
				cn(['accordion-body overflow-hidden pt-3', isOpen ? 'accordion-body-open pb-3' : 'accordion-body-close', isDisabled && 'cursor-default opacity-50', className])
			)}
		>
			<div>{children}</div>
		</div>
	);
};

export default Content;
