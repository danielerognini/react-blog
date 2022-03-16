import { ReactText } from 'react';
import { IconProps } from '../icon';
export interface BadgeProps {
    text?: ReactText;
    color?: 'red' | 'green';
    imageUrl?: string;
    leftIcon?: IconProps;
    rightIcon?: IconProps;
    handleRightIconClick?: () => void;
}
