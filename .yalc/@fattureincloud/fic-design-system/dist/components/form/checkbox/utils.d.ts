import { DefaultTheme } from 'styled-components';
import { IconProps } from '../../icon';
import { CheckboxInputProps } from './components/Input';
import { CheckboxLabelProps } from './components/Label';
import { checkboxStatus, CheckboxStyles } from './types';
interface InputMapParams extends CheckboxInputProps {
    theme: DefaultTheme;
}
export declare const getInputStyle: ({ theme, value, disabled, large, hasError }: InputMapParams) => CheckboxStyles;
interface LabelMapProps extends CheckboxLabelProps {
    theme: DefaultTheme;
}
export declare const getLabelStyle: ({ disabled, large, theme, hasError }: LabelMapProps) => {
    fontSize: string;
    cursor: string;
    opacity: number;
    color: string;
};
declare type statusIconType = {
    [k in checkboxStatus]: IconProps['icon'] | null;
};
export declare const statusIcon: statusIconType;
export declare const convertToStatus: (value: boolean | checkboxStatus) => checkboxStatus;
export {};
