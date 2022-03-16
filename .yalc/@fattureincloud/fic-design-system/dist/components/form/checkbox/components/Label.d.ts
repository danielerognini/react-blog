import { MappedLabelProps } from '../types';
export interface CheckboxLabelProps {
    large?: boolean;
    disabled?: boolean;
    hasError: boolean;
}
declare const Label: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, MappedLabelProps & CheckboxLabelProps, keyof MappedLabelProps>;
export default Label;
