/// <reference types="react" />
interface Props {
    show?: boolean;
    title?: string;
    renderHeader?: () => JSX.Element;
    renderFooter?: () => JSX.Element;
    actionClose?: () => void;
}
export declare type TDrawer = React.FunctionComponent<Props>;
export interface UnstyledDrawerProps extends Props {
}
export interface UnstyledDrawerState {
}
export {};
