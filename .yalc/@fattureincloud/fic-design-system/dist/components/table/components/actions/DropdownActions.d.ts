import { Row } from 'react-table';
import { RowAction, TableData } from '../../types';
interface Props<T extends TableData> {
    row: Row<T>;
    actions: RowAction<T>[];
    rowIsDisabled?: boolean;
}
declare const DropdownActions: <T extends TableData>({ row, actions, rowIsDisabled }: Props<T>) => JSX.Element;
export default DropdownActions;
