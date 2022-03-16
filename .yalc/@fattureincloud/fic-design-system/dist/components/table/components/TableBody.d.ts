import { Row, UseTableInstanceProps } from 'react-table';
import { TableData } from '../types';
interface Props<T extends TableData> {
    rows: Row<T>[];
    prepareRow: UseTableInstanceProps<T>['prepareRow'];
    selectedRowsIds: string[];
}
declare const TableBody: <T extends TableData>({ rows, prepareRow, selectedRowsIds }: Props<T>) => JSX.Element;
export interface TableBodyTrProps {
    isSelected?: boolean;
    isDisabled?: boolean;
}
export default TableBody;
