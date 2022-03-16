import { RefObject } from 'react';
import { TabsItem } from './types';
interface Props extends TabsItem {
    tabRef?: () => RefObject<HTMLDivElement>;
}
declare const Item: ({ active, handleClick, tabRef, text }: Props) => JSX.Element;
export default Item;
