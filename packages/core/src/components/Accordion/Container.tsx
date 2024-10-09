import { createContext, PropsWithChildren, useContext, useEffect } from 'react';

export const AccordionContext = createContext<{
	mode: 'single' | 'multiple';
	showDivider: boolean;
	activatedKeys: string[];
	setActivatedKeys: React.Dispatch<React.SetStateAction<string[]>>;
}>({
	mode: 'single',
	showDivider: true,
	activatedKeys: [],
	setActivatedKeys: () => [],
});

const AccordionContainer = ({ onChange, children }: PropsWithChildren<{ onChange: (keys: string[]) => void }>) => {
	const { activatedKeys } = useContext(AccordionContext);

	useEffect(() => {
		onChange(activatedKeys);
	}, [activatedKeys]);

	return children;
};

export default AccordionContainer;
