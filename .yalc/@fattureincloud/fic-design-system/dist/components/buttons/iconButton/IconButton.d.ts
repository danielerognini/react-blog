import { MouseEventHandler } from 'react';
import { IconProps } from '../../icon';
import { iconButtonColors, iconButtonTypes } from './types';
export interface IconButtonProps extends WrapperProps {
    icon: IconProps;
}
declare const IconButton: ({ className, color, icon, isDisabled, onClick, type }: IconButtonProps) => JSX.Element;
export interface WrapperProps {
    className?: string;
    onClick?: MouseEventHandler;
    isDisabled?: boolean;
    color?: iconButtonColors;
    type?: iconButtonTypes;
}
export default IconButton;
