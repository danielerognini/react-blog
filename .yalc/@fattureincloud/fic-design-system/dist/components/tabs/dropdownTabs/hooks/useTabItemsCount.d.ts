import { RefObject } from 'react';
import { TabsProps } from '../../common/types';
interface Params extends Required<Pick<TabsProps, 'distance' | 'lateralPadding'>> {
    tabsLength: number;
    wrapperWidth: number;
    tabsRefs: RefObject<HTMLDivElement>[];
}
interface ReturnType {
    visibleCount: number;
}
declare const useTabItemsCount: ({ distance, lateralPadding, tabsLength, tabsRefs, wrapperWidth }: Params) => ReturnType;
export default useTabItemsCount;
