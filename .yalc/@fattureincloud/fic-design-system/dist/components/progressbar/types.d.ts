/// <reference types="react" />
interface Props {
    color?: 'blue' | 'green' | 'red' | 'yellow' | 'grey';
    percentage: number;
}
export declare type TProgressbar = React.FunctionComponent<Props>;
export interface UnstyledProgressbarPropsInterface extends Props {
}
export interface UnstyledProgressbarStateInterface {
}
export {};
