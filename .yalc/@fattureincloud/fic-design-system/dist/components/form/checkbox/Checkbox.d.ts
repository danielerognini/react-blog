import { ChangeEvent, InputHTMLAttributes } from 'react';
import { InputHelperProps } from '../inputHelper';
import { CheckboxInputProps } from './components/Input';
import { CheckboxLabelProps } from './components/Label';
interface CheckboxImplProps extends Omit<CheckboxInputProps, 'hasError'>, Omit<CheckboxLabelProps, 'hasError'> {
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
    text?: string;
    helper?: InputHelperProps;
    className?: string;
    onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
}
export interface CheckboxProps extends Omit<CheckboxImplProps, 'value'> {
    value: CheckboxImplProps['value'] | boolean;
}
declare const Checkbox: ({ value, ...rest }: CheckboxProps) => JSX.Element;
export default Checkbox;
