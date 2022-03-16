import { Row } from 'react-table';
import { DropdownItemType } from '../../../dropdown/types';
import { RowAction, TableData } from '../../types';
interface Props<T extends TableData> {
    action: RowAction<T>;
    row: Row<T>;
    rowIsDisabled?: boolean;
    type?: DropdownItemType;
}
declare const PrimaryAction: <T extends TableData>({ action, row, rowIsDisabled, type, }: Props<T>) => JSX.Element | null;
export default PrimaryAction;
