import { DefaultTheme } from 'styled-components';
import { WrapperProps } from './SidebarItem';
import { SidebarItemStyles } from './sidebarItemPalette';
interface GetSidebarItemStylesParams extends WrapperProps {
    theme: DefaultTheme;
}
export declare const getSidebarItemStyles: ({ isActive, isDisabled, theme, }: GetSidebarItemStylesParams) => SidebarItemStyles;
export {};
