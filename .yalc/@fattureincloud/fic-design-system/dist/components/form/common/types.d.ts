import { colorsPalette } from '../../../common/types/colorsPalette';
import { paletteColor } from '../../../styles/types';
import { InputHelperProps } from '../inputHelper';
export declare const inputSizeArray: string[];
export declare type inputSizeType = typeof inputSizeArray[number];
export declare const statusesArray: string[];
export declare type statusType = typeof statusesArray[number];
export interface CommonFormTypes {
    inputSize?: inputSizeType;
    disabled?: boolean;
    helper?: InputHelperProps;
    status?: statusType;
}
export interface CommonInputParts extends colorsPalette {
    borderColor: paletteColor;
}
