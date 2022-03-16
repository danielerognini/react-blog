import { DefaultTheme } from 'styled-components';
import { WrapperProps } from './IconButton';
import { IconButtonParts } from './iconButtonPalette';
interface GetIconButtonColorsParams extends WrapperProps {
    theme: DefaultTheme;
}
declare type getIconButtonColorsType = (params: GetIconButtonColorsParams) => IconButtonParts;
export declare const getIconButtonColors: getIconButtonColorsType;
export {};
