import { paletteColor } from '../../styles/types';
import { TagType } from './types';
declare type microTagParts = 'color' | 'backgroundColor';
export declare type MicroTagParts = {
    [key in microTagParts]: paletteColor;
};
export declare type MicroTagPalette = {
    [key in TagType]: MicroTagParts;
};
declare const microTagPalette: MicroTagPalette;
export default microTagPalette;
