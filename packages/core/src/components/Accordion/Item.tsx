import { createContext, PropsWithChildren, SetStateAction, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '../../libs/utils';

export const AccordionItemContext = createContext<{
	itemId: string;
	loading?: boolean;
	setItemId: React.Dispatch<SetStateAction<string>>;
}>({
	itemId: '',
	loading: false,
	setItemId: () => '',
});

const Item = ({ id = '', loading = false, className = '', children }: PropsWithChildren<{ id?: string; className?: string; loading?: boolean }>) => {
	const [itemId, setItemId] = useState<string>('');

	useEffect(() => {
		setItemId(id);
	}, [id]);

	return (
		<AccordionItemContext.Provider value={{ loading, itemId, setItemId }}>
			<div className={twMerge(cn(['py-3 first:pt-0 last:pb-0', className]))}>{children}</div>
		</AccordionItemContext.Provider>
	);
};

export default Item;
