import { Component } from 'react';
import DropdownItem from './components/Item';
import DropdownSeparator from './components/Separator';
import DropdownTitle from './components/Title';
import { UserListItem } from './components/UserListItem';
import { DropdownProps } from './types';
export declare class Dropdown extends Component<DropdownProps> {
    static Item: typeof DropdownItem;
    static Title: typeof DropdownTitle;
    static Separator: typeof DropdownSeparator;
    static UserListItem: typeof UserListItem;
    render(): JSX.Element;
}
export default Dropdown;
