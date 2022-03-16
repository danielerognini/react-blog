import { CSSProperties, RefObject } from 'react';
import { IconProps } from '../icon';
export interface GroupedListProps {
    groups: GroupType[];
    className?: string;
    navigable?: boolean;
    placeholder?: string;
    wrapperStyle?: CSSProperties;
}
export interface GroupType {
    title: string;
    items: ItemType[];
}
export interface ItemType {
    title?: string;
    icon?: IconProps;
    active?: boolean;
    action?: JSX.Element;
    showActionOnHover?: boolean;
    onMouseHover?: () => void;
    onMouseOut?: () => void;
    onClick?: () => void;
}
export interface CommonComponentsProps {
    mouseBlockedProps: MouseBlockedProps;
    navigable?: boolean;
    index: number;
    wrapperRef: RefObject<HTMLDivElement>;
    placeholder?: string;
}
export interface MouseBlockedProps {
    mouseBlocked: boolean;
    setMouseBlocked: (value: boolean) => void;
}
