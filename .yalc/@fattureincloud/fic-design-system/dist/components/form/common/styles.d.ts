import { colorsPalette } from '../../../common/types/colorsPalette';
import { paletteColor } from '../../../styles/types';
import { CommonInputParts, statusType } from './types';
export interface BoxedInputWrapperProps extends colorsPalette {
    borderColor: paletteColor;
    normalFocused: CommonInputParts;
    status?: statusType;
    isPrefilled?: boolean;
    isTransparent?: boolean;
}
export declare const boxedInputWrapperStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<BoxedInputWrapperProps, import("styled-components").DefaultTheme>>;
