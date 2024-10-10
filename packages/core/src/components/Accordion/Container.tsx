import { createContext, PropsWithChildren, useContext, useEffect } from 'react';

export const AccordionContext = createContext<{
	mode: 'single' | 'multiple';
	selectedKeys?: string[];
	disabledKeys?: string[];
	activatedKeys: string[];
	setActivatedKeys: React.Dispatch<React.SetStateAction<string[]>>;
}>({
	mode: 'single',
	selectedKeys: [],
	disabledKeys: [],
	activatedKeys: [],
	setActivatedKeys: () => [],
});

const AccordionContainer = ({ onChange, children }: PropsWithChildren<{ onChange: (keys: string[]) => void }>) => {
	const { activatedKeys } = useContext(AccordionContext);

	useEffect(() => {
		onChange(activatedKeys);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activatedKeys]);

	return children;
};

export default AccordionContainer;
