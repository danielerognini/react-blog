import { UsePaginationInstanceProps } from 'react-table';
import { TableData } from '../../types';
interface Props<T extends TableData> {
    pageCount: number;
    pageIndex: number;
    gotoPage: UsePaginationInstanceProps<T>['gotoPage'];
}
declare const PaginationButtons: <T extends TableData>({ pageCount, pageIndex, gotoPage }: Props<T>) => JSX.Element;
export default PaginationButtons;
