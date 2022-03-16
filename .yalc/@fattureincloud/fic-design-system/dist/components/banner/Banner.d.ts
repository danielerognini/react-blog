/// <reference types="react" />
import { IconProps } from '../icon';
export declare type bannerColorType = 'red' | 'blue' | 'yellow' | 'green' | 'grey' | undefined;
export interface BannerProps {
    color?: bannerColorType;
    onClose?: () => void;
    content: string | JSX.Element;
    icon?: IconProps;
}
declare const Banner: ({ color, content, icon, onClose }: BannerProps) => JSX.Element;
export default Banner;
