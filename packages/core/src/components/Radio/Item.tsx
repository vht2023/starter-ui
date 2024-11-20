import { createContext, PropsWithChildren, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';
import { cn } from '../../libs/utils';
import { RadioContext } from './Container';

export const RadioItemContext = createContext<{
	isDisabled: boolean;
	itemId: string;
	setItemId: React.Dispatch<SetStateAction<string>>;
}>({
	isDisabled: false,
	itemId: '',
	setItemId: () => '',
});

const getRadioColors = (color: string) => {
	switch (color) {
		case 'primary':
			return 'group-has-[:checked]:bg-primary group-has-[:checked]:border-transparent group-has-[:checked]:shadow-[0_0_16px_rgba(0,111,238,0.5)] group-hover:scale-[1.1] group-hover:border-primary/70 group-hover:shadow-[0_0_16px_rgba(0,111,238,0.5)]';
		case 'secondary':
			return 'group-has-[:checked]:bg-secondary group-has-[:checked]:border-transparent group-has-[:checked]:shadow-[0_0_16px_rgba(120,40,200,0.5)] group-hover:scale-[1.1] group-hover:border-secondary/70 group-hover:shadow-[0_0_16px_rgba(120,40,200,0.5)]';
		case 'success':
			return 'group-has-[:checked]:bg-success group-has-[:checked]:border-transparent group-has-[:checked]:shadow-[0_0_16px_rgba(23,201,100,0.5)] group-hover:scale-[1.1] group-hover:border-success/70 group-hover:shadow-[0_0_16px_rgba(23,201,100,0.5)]';
		case 'warning':
			return 'group-has-[:checked]:bg-warning group-has-[:checked]:border-transparent group-has-[:checked]:shadow-[0_0_16px_rgba(245,165,36,0.5)] group-hover:scale-[1.1] group-hover:border-warning/70 group-hover:shadow-[0_0_16px_rgba(245,165,36,0.5)]';
		case 'error':
			return 'group-has-[:checked]:bg-error group-has-[:checked]:border-transparent group-has-[:checked]:shadow-[0_0_16px_rgba(245,165,36,0.5)] group-hover:scale-[1.1] group-hover:border-error/70 group-hover:shadow-[0_0_16px_rgba(245,165,36,0.5)]';
		default:
			return 'group-has-[:checked]:bg-default group-has-[:checked]:border-transparent group-has-[:checked]:shadow-[0_0_16px_rgba(17,24,28,0.5)] group-hover:scale-[1.1] group-hover:border-default/70 group-hover:shadow-[0_0_16px_rgba(17,24,28,0.5)]';
	}
};

const Item = ({ id = '', className = '', children }: PropsWithChildren<{ id?: string; className?: string }>) => {
	const { color, activatedKey, setActivatedKey, disabledKeys = [] } = useContext(RadioContext);

	const [itemId, setItemId] = useState<string>('');

	const isDisabled = useMemo(() => disabledKeys.includes(itemId), [disabledKeys, itemId]);

	useEffect(() => {
		setItemId(id);
	}, [id]);

	return (
		<div className={cn(['starterui-radio-item group relative', isDisabled ? 'cursor-default' : 'cursor-pointer'], className)}>
			<input
				id={id}
				type='radio'
				checked={activatedKey === itemId}
				disabled={isDisabled}
				onChange={() => setActivatedKey(itemId)}
				className='starterui-radio-item-input absolute opacity-0 w-0 h-0'
			/>
			<label
				className={cn([
					'starterui-radio-item-label relative inline-block pl-8 transition-all ease-in-out duration-300',
					isDisabled ? 'cursor-default text-default/50' : 'cursor-pointer',
				])}
				htmlFor={id}
			>
				<span
					className={cn([
						'absolute top-1/2 -translate-y-1/2 left-0 w-5 h-5 rounded-[50%] border-2 transition-all ease-in-out duration-300',
						getRadioColors(color),
						isDisabled ? 'border-default/30 group-hover:scale-100 group-hover:border-default/30 group-hover:shadow-none' : 'border-default/70',
					])}
				/>
				{children}
			</label>
		</div>
	);
};

export default Item;
