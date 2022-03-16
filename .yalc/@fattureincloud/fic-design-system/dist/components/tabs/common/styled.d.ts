import { TabsProps } from './types';
interface ElementsWrapperProps extends Pick<TabsProps, 'distance' | 'lateralPadding'> {
    hidden?: boolean;
}
export declare const TabsWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ElementsWrapperProps, never>;
export declare const ScrollableTabsWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ElementsWrapperProps, never>;
export {};
