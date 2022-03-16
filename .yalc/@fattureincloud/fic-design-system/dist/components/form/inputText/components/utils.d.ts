import { DefaultTheme } from 'styled-components';
import { InputTextStyles, InputTextWrapperProps } from './InputElement';
interface GetInputTextParams extends InputTextWrapperProps {
    theme: DefaultTheme;
}
export declare const getInputTextStyles: ({ theme, disabled, status }: GetInputTextParams) => InputTextStyles;
export {};
