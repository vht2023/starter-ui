import { PropsWithChildren, ReactNode, useContext } from 'react';
import { cn } from '../../libs/utils';
import { AccordionContext } from './Container';
import { AccordionItemContext } from './Item';

const Header = ({
	className,
	subTitle,
	children,
	onClick,
}: PropsWithChildren<{
	className?: string;
	subTitle?: ReactNode;
	onClick?: () => void;
}>) => {
	const { mode, activatedKeys, setActivatedKeys } = useContext(AccordionContext);

	const { itemId, loading, isDisabled } = useContext(AccordionItemContext);

	const onClickHeader = () => {
		if (loading || isDisabled) return;

		onClick?.();

		if (mode === 'single') {
			setActivatedKeys((prev) => (prev.includes(itemId) ? [] : [itemId]));
		} else {
			setActivatedKeys((prev) => (prev.includes(itemId) ? prev.filter((item) => item !== itemId) : [...prev, itemId]));
		}
	};

	return (
		<div
			id={`accordion-header-${itemId}`}
			onClick={onClickHeader}
			className={cn(['flex items-center justify-between w-full cursor-pointer', loading && 'opacity-70 cursor-wait', isDisabled && 'cursor-default opacity-50'], className)}
		>
			<div>
				<div className='text-lg font-semibold'>{children}</div>
				<div className='text-sm font-light opacity-85'>{subTitle}</div>
			</div>

			{loading ? (
				<div className='h-3 w-3 animate-spin rounded-full border-2 border-solid block border-t-transparent border-black/50 mr-0.5' />
			) : (
				<div className={cn(['transition-all duration-200', activatedKeys.includes(itemId) ? 'rotate-180' : 'rotate-0'])}>
					<svg width='14px' height='14px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
						<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
						<g id='SVGRepo_iconCarrier'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z'
								fill='#000000'
							></path>
						</g>
					</svg>
				</div>
			)}
		</div>
	);
};

export default Header;
