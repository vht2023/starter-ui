import { createContext, PropsWithChildren, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';
import { cn } from '../../libs/utils';
import { AccordionContext } from './Container';

export const AccordionItemContext = createContext<{
	loading?: boolean;
	isDisabled: boolean;
	itemId: string;
	setItemId: React.Dispatch<SetStateAction<string>>;
}>({
	loading: false,
	isDisabled: false,
	itemId: '',
	setItemId: () => '',
});

const Item = ({ id = '', loading = false, className = '', children }: PropsWithChildren<{ id?: string; className?: string; loading?: boolean }>) => {
	const { disabledKeys = [] } = useContext(AccordionContext);

	const [itemId, setItemId] = useState<string>('');

	const isDisabled = useMemo(() => disabledKeys.includes(itemId), [disabledKeys, itemId]);

	useEffect(() => {
		setItemId(id);
	}, [id]);

	return (
		<AccordionItemContext.Provider value={{ loading, isDisabled, itemId, setItemId }}>
			<div className={cn(['starterui-accordion pt-3 last:pb-0'], className)}>{children}</div>
		</AccordionItemContext.Provider>
	);
};

export default Item;
