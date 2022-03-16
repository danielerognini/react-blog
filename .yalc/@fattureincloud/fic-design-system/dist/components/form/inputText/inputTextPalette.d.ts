import { paletteColor } from '../../../styles/types';
import { CommonInputParts, statusType } from '../common/types';
export interface InputTextParts extends CommonInputParts {
    iconColor: paletteColor;
}
declare type StatusesPalette = {
    [key in statusType]: InputTextParts;
};
export declare type InputTextPalette = StatusesPalette & {
    normalFocused: InputTextParts;
    disabled: InputTextParts;
};
declare const inputTextPalette: InputTextPalette;
export default inputTextPalette;
