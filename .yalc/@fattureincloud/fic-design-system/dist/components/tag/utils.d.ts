import { DefaultTheme } from 'styled-components';
import { tagStyles, tagTypes } from './tagPalette';
interface GetTagColorsParams {
    theme: DefaultTheme;
    tagStyle: tagStyles;
    type: tagTypes;
}
export declare const getTagColors: ({ tagStyle, theme, type }: GetTagColorsParams) => import("./tagPalette").TagParts;
export {};
