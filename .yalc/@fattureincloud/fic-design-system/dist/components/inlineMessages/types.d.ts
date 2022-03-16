/// <reference types="react" />
import { IconProps } from '../icon';
export declare type MessageType = 'standard' | 'error' | 'info' | 'warning' | 'success';
export interface InlineMessagesProps {
    icon?: IconProps;
    renderIcon?: () => JSX.Element;
    title?: string;
    content?: string;
    size?: 'medium' | 'large';
    type?: MessageType;
    renderTitle?: () => JSX.Element;
    renderContent?: () => JSX.Element;
    onClose?: () => void;
    closeIcon?: IconProps;
    renderCloseIcon?: () => JSX.Element;
    componentStyle?: InlineMessageStyle;
}
export interface InlineMessageStyle {
    root?: Record<string, unknown>;
    icon?: Record<string, unknown>;
    contentWrapper?: Record<string, unknown>;
    title?: Record<string, unknown>;
    content?: Record<string, unknown>;
}
export interface UnstyledInlineMessagePropsInterface extends InlineMessagesProps {
}
export interface StyledContentProps {
    margin: boolean;
}
