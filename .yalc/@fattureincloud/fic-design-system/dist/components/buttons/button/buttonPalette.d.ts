import { paletteColor } from '../../../styles/types';
import { buttonColors, buttonParts, buttonSizes, buttonTypes } from './types';
export declare type ButtonParts = {
    [k in buttonParts]: paletteColor;
};
declare type ButtonMappedNormalColors = {
    [key in buttonColors]: ButtonParts;
};
interface ButtonMappedColors extends ButtonMappedNormalColors {
    disabled: ButtonParts;
}
declare type ButtonMappedTypes = {
    [k in buttonTypes]: ButtonMappedColors;
};
export interface ButtonPalette extends ButtonMappedTypes {
    defaultType: buttonTypes;
    defaultColor: buttonColors;
    defaultSize: buttonSizes;
}
declare const buttonPalette: ButtonPalette;
export default buttonPalette;
