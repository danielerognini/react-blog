import { DefaultTheme } from 'styled-components';
import { TextAreaStyles, TextAreaWrapperProps } from './TextAreaElement';
interface GetTextAreaParams extends TextAreaWrapperProps {
    theme: DefaultTheme;
}
export declare const getTextAreaStyles: ({ theme, disabled, status }: GetTextAreaParams) => TextAreaStyles;
export {};
