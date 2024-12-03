import React, { ReactNode } from 'react';
import { DOTS, usePagination } from '../../hooks/usePagination';
import { cn } from '../../libs/utils';
import Button from '../Button';

export interface Props {
	current: number;
	total: number;
	pageSize: number;
	size?: string;
	color?: string;
	outline?: boolean;
	disabled?: boolean;
	showTotal?: boolean;
	totalLabel?: ReactNode;
	className?: string;
	onChange?: (page: number, size: number) => void;
}

const getPaginationSize = (size: string) => {
	switch (size) {
		case 'md':
			return 'min-w-10 w-10 h-10';
		case 'lg':
			return 'min-w-12 w-12 h-12';
		default:
			return 'min-w-8 w-8 h-8';
	}
};

const Pagination: React.FC<Props> = ({
	current = 1,
	total = 0,
	pageSize = 10,
	size = 'sm',
	color = 'black',
	outline = false,
	disabled = false,
	showTotal = false,
	totalLabel,
	className,
	onChange,
}) => {
	const paginationRange = usePagination({
		total,
		current,
		pageSize,
	});

	if (current === 0 || !paginationRange || paginationRange.length < 2) {
		return null;
	}

	const handlePrevPage = () => {
		if (current > 1 && onChange) {
			onChange(current - 1, pageSize);
		}
	};

	const handleNextPage = () => {
		if (current < Math.ceil(total / pageSize) && onChange) {
			onChange(current + 1, pageSize);
		}
	};

	const isLastPage = current === Math.ceil(total / pageSize);

	return (
		<div className={cn(['starterui-pagination my-6 flex items-center justify-center w-full', className])}>
			<nav>
				<ul className='starterui-pagination-wrapper inline-flex items-center space-x-2'>
					{/* TOTAL ITEMS */}
					{showTotal && <li className='starterui-pagination-show-total'>{totalLabel || <span>Total {total} items</span>}</li>}

					{/* BUTTON PREVIOUS */}
					<li className='starterui-pagination-btn-prev'>
						<Button
							isIconOnly
							outline={outline}
							disabled={disabled || current === 1}
							className={cn(['p-2', getPaginationSize(size), current === 1 ? 'opacity-40' : '', outline ? 'border-0' : ''])}
							onClick={handlePrevPage}
						>
							<svg width='12' height='12' viewBox='0 0 6 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path id='Vector' d='M5 8L1 4.5L5 1' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</Button>
					</li>

					{/* PAGE NUMBER */}
					{paginationRange?.map((page: number | string, index: number) => {
						if (page === DOTS) {
							return (
								<li key={index} className='starterui-pagination-dots'>
									<Button
										isIconOnly
										outline={outline}
										disabled={disabled}
										className={cn(['p-2 leading-none active:scale-100 focus:ring-0', getPaginationSize(size), outline ? 'border-0' : ''])}
									>
										{DOTS}
									</Button>
								</li>
							);
						}

						return (
							<li key={index} className='starterui-pagination-page-number'>
								<Button
									outline={outline}
									disabled={disabled}
									className={cn(['p-0 leading-none', getPaginationSize(size), outline && page !== current ? 'border-0' : '', outline ? 'focus:ring-0' : ''])}
									color={page === current ? color : 'default'}
									onClick={() => onChange && page !== current && onChange(Number(page), pageSize)}
								>
									{page}
								</Button>
							</li>
						);
					})}

					{/* BUTTON NEXT */}
					<li className='starterui-pagination-btn-next'>
						<Button
							isIconOnly
							outline={outline}
							disabled={disabled || isLastPage}
							className={cn(['p-2', getPaginationSize(size), isLastPage ? 'opacity-40' : '', outline ? 'border-0' : ''])}
							onClick={handleNextPage}
						>
							<svg width='12' height='12' viewBox='0 0 6 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path id='Vector' d='M1 1L5 4.5L0.999999 8' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
