import { colorsPalette } from '../../common/types/colorsPalette';
export declare type tooltipTypes = 'dark' | 'light';
export declare type TooltipPalette = {
    [key in tooltipTypes]: colorsPalette;
};
declare const tooltipPalette: TooltipPalette;
export default tooltipPalette;
