import { ReactNode, useEffect, useMemo, useState } from 'react';
import { cn } from '../../libs/utils';
import Button from '../Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
	id?: string;
	active: string;
	data: { id: string; content: ReactNode; className?: string }[];
	autoplay?: boolean;
	autoplaySpeed?: number;
	showIndicators?: boolean;
	indicatorsClassName?: string;
	className?: string;
	onChange: (activeId: string) => void;
}

const Carousel: React.FC<Props> = ({
	id = 'carousel-default',
	active,
	data = [],
	autoplay = false,
	autoplaySpeed = 3000,
	showIndicators = true,
	className,
	indicatorsClassName,
	onChange,
}) => {
	const activedIndex = useMemo(() => data.findIndex((item) => item.id === active), [data]);
	const [currentIndex, setCurrentIndex] = useState<number>(activedIndex);

	const onPrev = () => {
		if (data.length === 0) return;
		const index = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
		setCurrentIndex(index);
		onChange(data?.[index]?.id);
	};

	const onNext = () => {
		if (data.length === 0) return;
		const index = (currentIndex + 1) % data.length;
		setCurrentIndex(index);
		onChange(data?.[index]?.id);
	};

	const onClickIndicator = (index: number) => {
		setCurrentIndex(index);
		onChange(data?.[index]?.id);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (autoplay) onNext();
		}, autoplaySpeed);

		return () => clearTimeout(timeout);
	}, [autoplay, currentIndex]);

	return (
		<div id={id} className={cn(['starterui-carousel relative w-full h-full overflow-hidden', className])} data-carousel='static'>
			{/* Carousel */}
			<div
				className='starterui-carousel-content flex transition-transform relative w-full h-full duration-500 ease-in-out'
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{data.map((item, index) => (
					<div
						key={index}
						className={cn([
							'relative flex-shrink-0 w-full h-full flex items-center justify-center',
							index === currentIndex && 'starterui-carousel-content-actived',
							item?.className,
						])}
					>
						{item.content}
					</div>
				))}
			</div>

			{/* Indicators */}
			{showIndicators && (
				<div
					className={cn([
						'starterui-carousel-indicators absolute z-10 flex -translate-x-1/2 space-x-1 rtl:space-x-reverse bottom-4 left-1/2 transition-all duration-500',
						indicatorsClassName,
					])}
				>
					{data.map((_, index) => (
						<span
							key={index}
							className={cn([
								'h-1 rounded-full transition-all cursor-pointer',
								index === currentIndex ? 'starterui-carousel-indicator-actived w-6 bg-primary flex-auto' : 'w-4 bg-[#c2c2c2] flex-none',
							])}
							onClick={() => onClickIndicator(index)}
						/>
					))}
				</div>
			)}

			{/* Prev Button */}
			<Button
				isIconOnly
				radius='full'
				size='sm'
				className='starterui-carousel-prev-btn absolute top-1/2 bg-[#cfcfcfee] hover:bg-[#cfcfcf] start-2 z-10 active:scale-90 p-1.5'
				onClick={onPrev}
			>
				<ChevronLeft size={20} />
			</Button>

			{/* Next Button */}
			<Button
				isIconOnly
				radius='full'
				size='sm'
				className='starterui-carousel-next-btn absolute top-1/2 bg-[#cfcfcfee] hover:bg-[#cfcfcf] end-2 z-10 active:scale-90 p-1.5'
				onClick={onNext}
			>
				<ChevronRight size={20} />
			</Button>
		</div>
	);
};

export default Carousel;
