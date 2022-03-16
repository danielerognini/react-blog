/// <reference types="react" />
export interface TabsProps {
    className?: string;
    tabs: TabsItem[];
    distance?: number;
    lateralPadding?: number;
}
export interface TabsItem {
    text: string | JSX.Element;
    active?: boolean;
    handleClick?: () => void;
}
