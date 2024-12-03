import { useMemo } from 'react';

interface Props {
	total: number;
	pageSize: number;
	current: number;
	siblingCount?: number;
}

export const DOTS = '...';

const usePagination = ({ total, pageSize, current, siblingCount = 1 }: Props): Array<string | number> | undefined => {
	const paginationRange = useMemo(() => {
		const totalPages = Math.ceil(total / pageSize);

		// Pages count is determined as siblingCount + firstPage + lastPage + current + 2*DOTS
		const totalPageNumbers = siblingCount + 5;

		const range = (start: number, end: number) => {
			const length = end - start + 1;
			return Array.from({ length }, (_, idx) => idx + start);
		};

		/*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
		if (totalPageNumbers >= totalPages) {
			return range(1, totalPages);
		}

		const leftSiblingIndex = Math.max(current - siblingCount, 1);
		const rightSiblingIndex = Math.min(current + siblingCount, totalPages);

		/*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component pageSize which we do not want
    */
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPages;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = 3 + 2 * siblingCount;
			const leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS, totalPages];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = 3 + 2 * siblingCount;
			const rightRange = range(totalPages - rightItemCount + 1, totalPages);
			return [firstPageIndex, DOTS, ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			const middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [total, pageSize, current, siblingCount]);

	return paginationRange;
};

export { usePagination };
