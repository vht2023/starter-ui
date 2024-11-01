import { PropsWithChildren, useState } from 'react';
import { cn } from '../../libs/utils';
import AccordionContainer, { AccordionContext } from './Container';
import Item from './Item';
import Header from './Header';
import Content from './Content';

interface Props {
	id?: string;
	mode?: 'single' | 'multiple';
	selectedKeys?: string[];
	disabledKeys?: string[];
	showDivider?: boolean;
	className?: string;
	onChange?: (keys: string[]) => void;
}

const Accordion = ({
	id = 'starterui-collapse-accordion',
	mode = 'single',
	selectedKeys = [],
	disabledKeys = [],
	showDivider = true,
	className,
	children,
	onChange,
}: PropsWithChildren<Props>) => {
	const [activatedKeys, setActivatedKeys] = useState<string[]>(selectedKeys);

	return (
		<div id={id} className={cn(['w-full', showDivider && 'divide-y'], className)}>
			<AccordionContext.Provider value={{ mode, selectedKeys, disabledKeys, activatedKeys, setActivatedKeys }}>
				<AccordionContainer onChange={(ids) => onChange?.(ids)}>{children}</AccordionContainer>
			</AccordionContext.Provider>
		</div>
	);
};

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
