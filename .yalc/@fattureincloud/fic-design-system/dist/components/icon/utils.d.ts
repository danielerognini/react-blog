import { DefaultTheme } from 'styled-components';
import { StyledIconProps } from './Icon';
import { IconColorPalette } from './iconPalette';
interface GetIconStylesParams extends Pick<StyledIconProps, 'color'> {
    theme: DefaultTheme;
}
export declare const getIconStyles: ({ theme, color }: GetIconStylesParams) => IconColorPalette;
export {};
