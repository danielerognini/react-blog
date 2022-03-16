/// <reference types="react" />
import { DropdownItemProps } from '../types';
import { DropdownItemStyles } from '../utils';
declare const Item: ({ active, className, icon, onClick, shortcut, text, isDisabled, ...rest }: DropdownItemProps) => JSX.Element;
export interface StyledItemProps extends Pick<DropdownItemProps, 'fullWidth' | 'maxWidth' | 'active' | 'isDisabled' | 'type'> {
    hasAction: boolean;
}
export declare const StyledItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DropdownItemStyles & StyledItemProps, keyof DropdownItemStyles>;
export default Item;
