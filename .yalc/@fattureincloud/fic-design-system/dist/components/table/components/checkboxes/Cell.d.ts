import { CellProps } from 'react-table';
import { TableData } from '../../types';
declare const Cell: <T extends TableData>({ row }: CellProps<T, any>) => JSX.Element;
export default Cell;
