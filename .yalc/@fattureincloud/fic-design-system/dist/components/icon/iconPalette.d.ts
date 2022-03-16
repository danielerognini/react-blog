import { Palette, paletteColor } from '../../index';
export declare type iconColors = keyof Palette;
declare type iconParts = 'primary' | 'secondary';
export declare type IconColorPalette = {
    [k in iconParts]: paletteColor;
};
export declare type IconPalette = {
    [k in iconColors]: IconColorPalette;
};
declare const iconPalette: IconPalette;
export default iconPalette;
