/// <reference types="react" />
interface Props {
    title?: string;
    renderTitle?: () => JSX.Element;
    renderBody: () => JSX.Element;
    renderLateralActions?: JSX.Element;
    lateralActions?: Array<{
        icon: JSX.Element;
        action: () => void;
    }>;
    showBodyAtFirstRender?: boolean;
}
export declare type TAccordion = React.FunctionComponent<Props>;
export interface UnstyledAccordionProps extends Props {
}
export interface UnstyledAccordionState {
    show: boolean;
}
export {};
