import { checkboxStatus, CheckboxStyles } from '../types';
export interface CheckboxInputProps {
    value: checkboxStatus;
    disabled?: boolean;
    large?: boolean;
    hasError: boolean;
}
declare const Input: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, CheckboxStyles & CheckboxInputProps, keyof CheckboxStyles>;
export default Input;
