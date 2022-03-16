import { colorsPalette } from '../../../common/types/colorsPalette';
import { paletteColor } from '../../../styles/types';
import { statusType } from '../common/types';
export interface TextAreaParts extends colorsPalette {
    borderColor: paletteColor;
}
declare type StatusesPalette = {
    [key in statusType]: TextAreaParts;
};
export interface TextAreaPalette extends StatusesPalette {
    normalFocused: TextAreaParts;
    disabled: TextAreaParts;
}
declare const textAreaPalette: TextAreaPalette;
export default textAreaPalette;
