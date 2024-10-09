import React, { PropsWithChildren, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '../../libs/utils';
import AccordionContainer, { AccordionContext } from './Container';
import Item from './Item';
import Header from './Header';
import Content from './Content';

interface Props {
	id?: string;
	mode?: 'single' | 'multiple';
	selectedKeys?: string[] | 'all';
	disabledKeys?: string[];
	defaultSelectedKeys?: string[] | 'all';
	showDivider?: boolean;
	className?: string;
	onChange?: (keys: string[]) => void;
}

const Accordion = ({
	id = 'accordion-collapse',
	mode = 'single',
	selectedKeys = [],
	disabledKeys = [],
	defaultSelectedKeys = [],
	showDivider = true,
	className,
	children,
	onChange,
}: PropsWithChildren<Props>) => {
	const [activatedKeys, setActivatedKeys] = useState<string[]>([]);

	return (
		<div id={id} className={twMerge(cn(['w-full divide-y']), className)}>
			<AccordionContext.Provider value={{ mode, showDivider, activatedKeys, setActivatedKeys }}>
				<AccordionContainer onChange={(ids) => onChange && onChange(ids)}>{children}</AccordionContainer>
			</AccordionContext.Provider>
		</div>
	);
};

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
