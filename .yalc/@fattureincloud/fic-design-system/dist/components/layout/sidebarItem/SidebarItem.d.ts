import { MouseEventHandler } from 'react';
import { paletteColor } from '../../../styles/types';
import { DropdownItemProps } from '../../dropdown';
import { IconProps } from './../../icon';
import { CustomSidebarItemProps } from './types';
export interface SidebarItemProps {
    icon?: IconProps;
    title: string;
    isDisabled?: boolean;
    isHidden?: boolean;
    onClick?: MouseEventHandler;
    isOpen?: boolean;
    caretVisible?: boolean;
    dropdownContent?: DropdownItemProps[];
    className?: string;
    isActive?: boolean;
    forceOpenDropdown?: boolean;
    customProps?: CustomSidebarItemProps;
    href?: string;
}
export declare const sidebarItemHeight = 44;
declare const SidebarItem: (props: SidebarItemProps) => JSX.Element | null;
export interface WrapperProps {
    isActive: boolean;
    isDisabled: boolean;
    customColor?: paletteColor;
}
export default SidebarItem;
