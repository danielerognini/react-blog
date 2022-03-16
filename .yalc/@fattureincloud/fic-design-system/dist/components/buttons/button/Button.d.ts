import { ReactText } from 'react';
import { IconProps } from '../../icon';
import { WrapperProps } from './types';
export interface ButtonProps extends Partial<WrapperProps> {
    text?: ReactText | JSX.Element;
    iconLeft?: IconProps;
    iconRight?: IconProps;
    isLoading?: boolean;
}
declare const Button: ({ className, color, fullWidth, href, iconLeft, iconRight, isDisabled, isLoading, onClick, size, target, text, type, }: ButtonProps) => JSX.Element;
export default Button;
