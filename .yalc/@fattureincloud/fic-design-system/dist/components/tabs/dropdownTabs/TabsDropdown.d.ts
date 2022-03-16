import { TabsItem } from '../common/types';
interface Props {
    active: TabsItem['active'];
    tabs: TabsItem[];
}
declare const TabsDropdown: ({ active, tabs }: Props) => JSX.Element;
export default TabsDropdown;
