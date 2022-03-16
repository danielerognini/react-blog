import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { iconColors } from './iconPalette';
export interface IconProps extends Omit<FontAwesomeIconProps, 'color'> {
    color?: iconColors;
    isDisabled?: boolean;
}
declare const Icon: ({ onClick, isDisabled, ...props }: IconProps) => JSX.Element;
export declare type StyledIconProps = IconProps;
export default Icon;
