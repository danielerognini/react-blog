import { paletteColor } from '../../../styles/types';
import { iconButtonColors, iconButtonParts, iconButtonTypes } from './types';
export declare type IconButtonParts = {
    [key in iconButtonParts]: paletteColor;
};
declare type IconButtonMappedNormalColors = {
    [key in iconButtonColors]: IconButtonParts;
};
interface IconButtonMappedColors extends IconButtonMappedNormalColors {
    disabled: IconButtonParts;
}
declare type IconButtonMappedTypes = {
    [k in iconButtonTypes]: IconButtonMappedColors;
};
export interface IconButtonPalette extends IconButtonMappedTypes {
    defaultType: iconButtonTypes;
    defaultColor: iconButtonColors;
}
declare const iconButtonPalette: IconButtonPalette;
export default iconButtonPalette;
