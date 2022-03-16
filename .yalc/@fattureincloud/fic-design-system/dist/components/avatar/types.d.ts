export interface AvatarProps {
    className?: string;
    initials?: string;
    size: AvatarAllowedSizes;
    placeholder?: string;
    image?: string;
}
export declare type AvatarAllowedSizes = 'xs' | 's' | 'm' | 'l';
