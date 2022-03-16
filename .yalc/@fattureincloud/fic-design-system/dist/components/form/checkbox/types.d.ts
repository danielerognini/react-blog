import { paletteColor } from '../../../styles/types';
export declare type checkboxStatus = 'checked' | 'unchecked' | 'indeterminate';
export declare type checkboxState = 'normal' | 'error';
export declare type checkboxParts = 'tickColor' | 'backgroundColor' | 'borderColor';
export interface CheckboxStyles {
    height: string;
    width: string;
    backgroundColor: paletteColor;
    tickColor: paletteColor;
    borderColor: paletteColor;
    cursor: string;
    opacity: number;
}
export interface MappedLabelProps {
    fontSize: string;
    cursor: string;
    color: paletteColor;
    opacity: number;
}
