import React from 'react';
import { paletteColor } from '../../../styles/types';
import { SidebarItemProps } from './SidebarItem';
export interface CustomSidebarItemProps {
    color?: paletteColor;
    renderContent?: React.FC<SidebarItemProps>;
}
