/// <reference types="react" />
import { Row } from 'react-table';
import { RowActions, TableData } from '../types';
interface Props<T extends TableData> {
    row: Row<T>;
    actions?: RowActions<T>;
    renderActions?: () => JSX.Element;
}
declare const ActionsCell: <T extends TableData>({ row, actions, renderActions }: Props<T>) => JSX.Element;
export default ActionsCell;
