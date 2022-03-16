import { IconProps } from '../icon';
import { tagStyles, tagTypes } from './tagPalette';
export interface StyledTagProps {
    type: tagTypes;
    tagStyle: tagStyles;
    className?: string;
}
export interface TagProps extends StyledTagProps {
    text: string;
    leftIcon?: IconProps;
    rightIcon?: IconProps;
}
