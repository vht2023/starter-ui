import { cn } from '../../libs/utils';
import Step from './Step';

interface StepItemProps {
	id?: string;
	title: string;
	description?: string;
	status?: string;
	disabled?: boolean;
	className?: string;
}

interface Props {
	id?: string;
	current: number;
	direction?: 'horizontal' | 'vertical';
	items: StepItemProps[];
	className?: string;
	onChange?: (value: number) => void;
}

const Steps: React.FC<Props> = ({ id = 'starterui-default-steps', current, direction = 'horizontal', items, className, onChange }) => {
	const clickable = !!onChange;
	const lastItem = items[items.length - 1];
	const remainingItems = [...items].slice(0, items.length - 1);

	return (
		<div
			id={id}
			className={cn([
				'starterui-steps w-full h-full flex text-base justify-between text-default/60 gap-2',
				direction === 'horizontal' ? 'flex-row items-center' : 'flex-col',
				className,
			])}
		>
			{/* REMAINING ITEM */}
			<div className={cn(['flex-auto grid gap-2', direction === 'horizontal' ? 'grid-flow-col auto-cols-auto' : 'grid-flow-row auto-rows-auto'])}>
				{remainingItems.map((item, index) => (
					<Step
						{...item}
						key={index}
						number={index + 1}
						id={item.id || `starterui-step-${index + 1}`}
						current={current}
						clickable={clickable}
						direction={direction}
						onChange={onChange}
					/>
				))}
			</div>
			{/* LAST ITEM */}
			<Step key={items.length - 1} {...lastItem} number={items.length} current={current} clickable={clickable} direction={direction} isLastItem={true} onChange={onChange} />
		</div>
	);
};

export default Steps;
