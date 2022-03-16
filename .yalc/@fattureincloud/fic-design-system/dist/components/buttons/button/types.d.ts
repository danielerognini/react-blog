import { MouseEventHandler } from 'react';
import { ButtonParts } from './buttonPalette';
export declare const buttonSizesArray: readonly ["large", "medium"];
export declare type buttonSizes = typeof buttonSizesArray[number];
export declare const buttonTypesArray: readonly ["primary", "secondary", "text"];
export declare type buttonTypes = typeof buttonTypesArray[number];
export declare const buttonColorsArray: readonly ["blue", "red", "green", "grey", "yellow"];
export declare type buttonColors = typeof buttonColorsArray[number];
export declare const buttonDisableColorArray: readonly ["disabled"];
export declare type buttonDisableColor = typeof buttonDisableColorArray[number];
export declare const buttonPartsArray: readonly ["normal", "hover", "active", "text", "textHover"];
export declare type buttonParts = typeof buttonPartsArray[number];
export interface WrapperProps {
    isDisabled: boolean;
    fullWidth?: boolean;
    className?: string;
    color?: buttonColors;
    size?: buttonSizes;
    type?: buttonTypes;
    onClick?: MouseEventHandler;
    href?: string;
    target?: string;
}
export interface ButtonStyles extends ButtonParts {
    height: number;
    border: string;
    cursor: string;
}
