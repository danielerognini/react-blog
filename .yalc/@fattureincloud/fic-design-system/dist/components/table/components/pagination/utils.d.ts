import { DefaultTheme } from 'styled-components';
import { paletteColor } from '../../../../styles/types';
import { PageButtonWrapperProps } from './PageButton';
interface GetPageButtonParams extends PageButtonWrapperProps {
    theme: DefaultTheme;
}
export interface PageButtonStyles {
    color: paletteColor;
    background: paletteColor;
    hoverColor: paletteColor;
    hoverBackground: paletteColor;
}
export declare const getPageButtonStyles: ({ theme, isActive }: GetPageButtonParams) => PageButtonStyles;
export {};
