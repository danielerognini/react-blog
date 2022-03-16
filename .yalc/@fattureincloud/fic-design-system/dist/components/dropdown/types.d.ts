import { Placement } from '@popperjs/core/lib/enums';
import React, { CSSProperties, MouseEventHandler } from 'react';
import { AvatarAllowedSizes } from '../avatar/types';
import { IconProps } from '../icon';
export declare type TitleProps = {
    text: string;
};
export declare type closeDropdownType = () => void;
export declare type renderContentType = (closeDropdown: closeDropdownType) => React.ReactNode;
export declare type DropdownProps = {
    className?: string;
    title?: string;
    renderTrigger?: () => React.ReactNode;
    triggerStyles?: CSSProperties;
    content?: DropdownItemProps[];
    renderContent?: renderContentType;
    maxWidth?: string;
    fullWidth?: boolean;
    placement?: Placement;
    minWidthAsTrigger?: boolean;
    forceOpen?: boolean;
};
export declare type DropdownItemType = 'default' | 'danger' | 'success' | 'warning' | 'link';
export interface DropdownItemProps {
    text: string | JSX.Element;
    className?: string;
    icon?: IconProps;
    active?: boolean;
    shortcut?: string;
    onClick?: MouseEventHandler;
    maxWidth?: DropdownProps['maxWidth'];
    fullWidth?: DropdownProps['fullWidth'];
    children?: React.ReactChild;
    isDisabled?: boolean;
    type?: DropdownItemType;
}
export interface UserListItemProps {
    img?: string;
    placeholder?: string;
    avatarSize?: AvatarAllowedSizes;
    noText?: string;
    text?: string;
    renderText?: JSX.Element;
    onClick?: () => void;
}
export interface Dropdown {
    Container: React.FC<DropdownProps>;
    Item: React.FC<DropdownItemProps>;
    Separator: React.FC;
    UserListItem: React.FC<UserListItemProps>;
    Title: React.FC<TitleProps>;
}
