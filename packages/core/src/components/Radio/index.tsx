import { PropsWithChildren, useState } from 'react';
import { IColors } from '../../types/common';
import { cn } from '../../libs/utils';
import RadioContainer, { RadioContext } from './Container';
import Item from './Item';

interface Props {
	id?: string;
	selectedKey?: string;
	disabledKeys?: string[];
	color?: IColors;
	className?: string;
	onChange?: (value?: string) => void;
}

const Radio = ({ id = 'default-radio-group', color = 'default', selectedKey, disabledKeys = [], className, onChange, children }: PropsWithChildren<Props>) => {
	const [activatedKey, setActivatedKey] = useState<string | undefined>(selectedKey);

	return (
		<div id={id} className={cn(['starterui-radio-group space-y-3', className])}>
			<RadioContext.Provider value={{ color, selectedKey, disabledKeys, activatedKey, setActivatedKey }}>
				<RadioContainer onChange={(id) => onChange?.(id)}>{children}</RadioContainer>
			</RadioContext.Provider>
		</div>
	);
};

Radio.Item = Item;

export default Radio;
