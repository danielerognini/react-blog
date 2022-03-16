/// <reference types="react" />
import { IconProps } from '../icon';
interface Props {
    icon?: IconProps;
    title: string;
    text?: string;
    action?: {
        text: string;
        icon?: IconProps;
        action: () => void;
    };
}
export declare const PageEmptySet: ({ action, icon, text, title }: Props) => JSX.Element;
export {};
