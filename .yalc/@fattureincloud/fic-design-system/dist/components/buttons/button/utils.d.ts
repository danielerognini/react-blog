import { DefaultTheme } from 'styled-components';
import { ButtonStyles, WrapperProps } from './types';
interface GetButtonStylesParams extends WrapperProps {
    theme: DefaultTheme;
}
export declare const getButtonStyles: ({ color, isDisabled, size, theme, type }: GetButtonStylesParams) => ButtonStyles;
export {};
