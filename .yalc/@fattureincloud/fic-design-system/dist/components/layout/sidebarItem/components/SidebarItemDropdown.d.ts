import { DropdownItemProps } from '../../../dropdown';
interface Props {
    content: DropdownItemProps[];
    className?: string;
    forceOpen?: boolean;
}
declare const SidebarItemDropdown: ({ className, content, forceOpen }: Props) => JSX.Element;
export default SidebarItemDropdown;
