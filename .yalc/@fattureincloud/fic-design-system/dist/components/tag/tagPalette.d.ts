import { paletteColor } from '../../styles/types';
export declare type tagTypes = 'standard' | 'error' | 'info' | 'warning' | 'success';
export declare type tagStyles = 'soft' | 'full' | 'text';
export declare type tagParts = 'color' | 'backgroundColor';
export declare type TagParts = {
    [key in tagParts]: paletteColor;
};
export declare type TagPalette = {
    [key in tagStyles]: {
        [key in tagTypes]: TagParts;
    };
};
declare const tagPalette: TagPalette;
export default tagPalette;
