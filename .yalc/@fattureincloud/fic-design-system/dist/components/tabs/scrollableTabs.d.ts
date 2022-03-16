import { TabsItem } from './common/types';
interface Props {
    className?: string;
    tabs: TabsItem[];
    distance?: number;
    lateralPadding?: number;
}
declare const ScrollableTabs: ({ className, distance, lateralPadding, tabs }: Props) => JSX.Element;
export default ScrollableTabs;
