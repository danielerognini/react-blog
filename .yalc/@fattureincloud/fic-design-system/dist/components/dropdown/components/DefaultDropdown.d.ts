import { DropdownItemProps, DropdownProps } from '../types';
interface Props {
    content: DropdownItemProps[];
    fullWidth: DropdownProps['fullWidth'];
    maxWidth: DropdownProps['maxWidth'];
    closeDropdown: () => void;
}
declare const DefaultDropdown: ({ closeDropdown, content, fullWidth, maxWidth }: Props) => JSX.Element;
export default DefaultDropdown;
