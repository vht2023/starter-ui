import React from 'react';
import { cn } from '../../libs/utils';
import { ChevronRight } from 'lucide-react';

interface Props {
	id?: string;
	data: { title: string | React.ReactElement; url: string; isDisabled?: boolean; className?: string }[];
	size?: string;
	underline?: string;
	className?: string;
	onClick?: (url: string) => () => void;
}

const getTextSize = (size: string) => {
	switch (size) {
		case 'sm':
			return 'text-sm';
		case 'md':
			return `text-base`;
		case 'lg':
			return `text-lg`;
		default:
			return `text-base`;
	}
};

const getUnderline = (underline: string) => {
	switch (underline) {
		case 'hover':
			return `hover:underline`;
		case 'all':
			return 'underline';
		default:
			return '';
	}
};

const Breadcrumb: React.FC<Props> = ({ id = 'starterui-default-breadcrumbs', data, size = 'md', underline = 'hover', className, onClick }) => {
	if (data && data.length === 0) return null;

	return (
		<nav id={id} className='starterui-breadcrumb' aria-label='Breadcrumb'>
			<ol className={cn(['inline-flex items-center space-x-1 leading-none', className])}>
				{data.map((item, index) => (
					<React.Fragment key={index}>
						<li className='flex items-center space-x-1' key={index} aria-current={index === data.length - 1}>
							{index != 0 && <ChevronRight size={16} />}
							{item.title && (
								<>
									{index === data.length - 1 || !item.url || item?.isDisabled ? (
										<span
											className={cn([
												'w-fit text-default',
												index === data.length - 1 ? 'font-bold' : '',
												getTextSize(size),
												item?.isDisabled ? 'text-default/50' : '',
												item?.className,
											])}
										>
											{item.title}
										</span>
									) : (
										<a
											href={item.url}
											className={cn([
												'w-fit font-normal text-default hover:text-default/60 transition-all duration-200 underline-offset-1 decoration-1',
												getTextSize(size),
												getUnderline(underline),
												item?.className,
											])}
											onClick={onClick?.(item.url)}
										>
											{item.title}
										</a>
									)}
								</>
							)}
						</li>
					</React.Fragment>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
