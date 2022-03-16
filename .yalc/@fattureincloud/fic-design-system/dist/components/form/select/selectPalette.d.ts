import { colorsPalette } from '../../../common/types/colorsPalette';
import { paletteColor } from '../../../styles/types';
import { statusType } from '../common/types';
export interface SelectParts extends colorsPalette {
    borderColor: paletteColor;
    iconColor: paletteColor;
}
declare type StatusesPalette = {
    [key in statusType]: SelectParts;
};
export interface SelectPalette extends StatusesPalette {
    normalFocused: SelectParts;
    disabled: SelectParts;
}
declare const selectPalette: SelectPalette;
export default selectPalette;
