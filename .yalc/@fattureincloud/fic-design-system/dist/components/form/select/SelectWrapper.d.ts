import { BoxedInputWrapperProps } from '../common/styles';
import { SelectProps } from './types';
export declare type SelectWrapperProps = Pick<SelectProps, 'disabled' | 'status' | 'inputSize' | 'isPrefilled' | 'isTransparent'>;
export declare type SelectStyles = Omit<BoxedInputWrapperProps, 'status'>;
export declare const SelectWrapper: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, SelectStyles & SelectWrapperProps, "color" | "background" | "borderColor" | "isPrefilled" | "isTransparent" | "normalFocused">;
