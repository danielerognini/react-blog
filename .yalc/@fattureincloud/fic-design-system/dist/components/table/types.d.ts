import { Row, SortingRule } from 'react-table';
import { DropdownItemType } from '../dropdown/types';
import { IconProps } from '../icon';
export interface TableData {
    isDisabled?: boolean;
}
export interface CustomColumn {
    align?: 'left' | 'center' | 'right';
}
export interface RowActions<T extends TableData> {
    primary?: RowAction<T>;
    dropdown?: RowAction<T>[];
}
export interface RowAction<T extends TableData> {
    icon?: IconProps;
    type?: DropdownItemType;
    text: string;
    onClick: (row: Row<T>) => void;
    isDisabled?: boolean;
}
interface ManualPaginationConfig {
    pageCount: number;
    setCurrentPage: (page: number) => void;
}
export declare type ManualPagination = ManualPaginationConfig | undefined;
export declare type OnSort<T extends TableData> = (sortBy: Array<SortingRule<T>>) => void;
export {};
