import { colorsPalette } from '../../common/types/colorsPalette';
import { paletteColor } from '../../styles/types';
import { DropdownItemType } from './types';
interface ItemColors extends colorsPalette {
    hoverBackground: paletteColor;
}
declare type NotActiveItemPalette = {
    [k in DropdownItemType]: ItemColors;
};
interface ItemPalette {
    active: ItemColors;
    notActive: NotActiveItemPalette;
}
export interface DropdownPalette {
    items: ItemPalette;
}
declare const dropdownPalette: DropdownPalette;
export default dropdownPalette;
