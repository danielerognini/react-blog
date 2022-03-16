import { colorsPalette } from '../../../common/types/colorsPalette';
import { paletteColor } from '../../../styles/types';
declare type statusType = 'normal' | 'active' | 'disabled';
export interface SidebarItemStyles extends colorsPalette {
    hoverColor: paletteColor;
    hoverBackground: paletteColor;
    dropdownHover: paletteColor;
    dropdownActive: paletteColor;
}
export declare type SidebarItemPalette = {
    [key in statusType]: SidebarItemStyles;
};
declare const sidebarItemPalette: SidebarItemPalette;
export default sidebarItemPalette;
