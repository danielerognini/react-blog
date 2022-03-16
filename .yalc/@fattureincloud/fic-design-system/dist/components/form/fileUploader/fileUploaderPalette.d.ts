/// <reference types="react" />
import { paletteColor } from '../../../styles/types';
import { IconProps } from '../../icon';
import { statuses } from './types';
export declare type FileUploaderParts = {
    background: paletteColor;
    borderColor: paletteColor;
    color: paletteColor;
    secondaryColor: paletteColor;
    text: React.ReactChild | null;
    caption: React.ReactChild | null;
    icon: IconProps | null;
};
export declare type FileUploaderPalette = {
    [key in statuses]: FileUploaderParts;
};
declare const fileUploaderPalette: FileUploaderPalette;
export default fileUploaderPalette;
