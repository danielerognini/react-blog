/// <reference types="react" />
import { Row, UseTableOptions } from 'react-table';
import { EmptyTablePageProps } from './components/EmptyState';
import { ManualPagination, OnSort, RowActions, TableData } from './types';
export interface TableProps<T extends TableData> extends UseTableOptions<T> {
    sortable?: boolean;
    hideHeader?: boolean;
    EmptyPage?: EmptyTablePageProps['EmptyPage'];
    Footer?: JSX.Element;
    noPagination?: boolean;
    manualPagination?: ManualPagination;
    withCheckbox?: boolean;
    onSelectionChange?: (rows: Array<Row<T>>) => void;
    actions?: RowActions<T>;
    renderActions?: () => JSX.Element;
    onSort?: OnSort<T>;
    globalFilter?: string;
}
declare const Table: <T extends TableData>({ columns, data, EmptyPage, Footer, onSelectionChange, actions, renderActions, sortable, hideHeader, noPagination, manualPagination, withCheckbox, onSort, globalFilter: externalGlobalFilter, }: TableProps<T>) => JSX.Element;
export default Table;
