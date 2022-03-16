import { DefaultTheme } from 'styled-components';
import { colorsPalette } from '../../../common/types/colorsPalette';
import { tooltipTypes } from '../tooltipPalette';
export interface MessageProps {
    type: tooltipTypes;
}
export declare const Message: import("styled-components").StyledComponent<"div", DefaultTheme, colorsPalette & MessageProps, keyof colorsPalette>;
