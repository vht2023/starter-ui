import { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import { IColors } from '../../types/common';

export const RadioContext = createContext<{
	color: IColors;
	selectedKey?: string;
	disabledKeys?: string[];
	activatedKey?: string;
	setActivatedKey: React.Dispatch<React.SetStateAction<string | undefined>>;
}>({
	color: 'default',
	selectedKey: undefined,
	disabledKeys: [],
	activatedKey: undefined,
	setActivatedKey: () => undefined,
});

const RadioContainer = ({ onChange, children }: PropsWithChildren<{ onChange: (key?: string) => void }>) => {
	const { activatedKey } = useContext(RadioContext);

	useEffect(() => {
		onChange(activatedKey);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activatedKey]);

	return children;
};

export default RadioContainer;
