import { MenuListComponentProps } from 'react-select/src/components/Menu';
import { OptionType } from './Option';
declare const MenuList: <O extends OptionType = OptionType, IsMulti extends boolean = false>(props: MenuListComponentProps<O, IsMulti, import("react-select").GroupTypeBase<O>>) => JSX.Element;
export default MenuList;
