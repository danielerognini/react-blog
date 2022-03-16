import { colorsPalette } from '../../common/types/colorsPalette';
import { ButtonProps, IconButtonProps } from '../buttons';
import { DropdownItemType } from '../dropdown/types';
declare type TableHeaderPalette = colorsPalette;
declare type rowStatus = 'normal' | 'hover' | 'selected' | 'disabled';
declare type TableRowsPalette = {
    [k in rowStatus]: colorsPalette;
};
interface SelectedRowsCountPalette extends colorsPalette {
    resetButtonColor: ButtonProps['color'];
}
declare type paginationItemStatus = 'normal' | 'hover' | 'active';
declare type PaginationPalette = {
    numbers: {
        [k in paginationItemStatus]: colorsPalette;
    };
    buttons: ButtonProps['color'];
};
declare type ActionsPalette = {
    colors: {
        [k in DropdownItemType]: ButtonProps['color'];
    };
    dropdownTriggerColor: IconButtonProps['color'];
};
export interface TablePalette {
    header: TableHeaderPalette;
    rows: TableRowsPalette;
    selectedRowsCount: SelectedRowsCountPalette;
    actions: ActionsPalette;
    pagination: PaginationPalette;
}
declare const tablePalette: TablePalette;
export default tablePalette;
