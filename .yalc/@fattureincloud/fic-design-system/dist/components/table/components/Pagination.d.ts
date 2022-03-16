import { UsePaginationInstanceProps } from 'react-table';
import { TableData } from '../types';
interface Props<T extends TableData> extends Omit<UsePaginationInstanceProps<T>, 'page' | 'pageOptions' | 'setPageSize'> {
    pageIndex: number;
}
declare const Pagination: <T extends TableData>({ canPreviousPage, nextPage, previousPage, canNextPage, gotoPage, pageCount, pageIndex, }: Props<T>) => JSX.Element;
export default Pagination;
