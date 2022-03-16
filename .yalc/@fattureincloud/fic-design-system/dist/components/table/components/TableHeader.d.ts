import { HeaderGroup } from 'react-table';
import { TableData } from '../types';
interface Props<T extends TableData> {
    headerGroups: HeaderGroup<T>[];
}
declare const TableHeader: <T extends TableData>({ headerGroups }: Props<T>) => JSX.Element;
export default TableHeader;
