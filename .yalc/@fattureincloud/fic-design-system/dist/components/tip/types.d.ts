import { ReactNode } from 'react';
import { IconProps } from '../icon';
export interface TipProps {
    text: string | ReactNode;
    leftIcon?: IconProps;
    onClose?: () => void;
    closeIcon?: IconProps;
    renderCloseIcon?: () => JSX.Element;
    renderIcon?: () => JSX.Element;
    className?: string;
}
export interface ShortcutTipProps extends Omit<TipProps, 'text'> {
    text: string;
    shortcut: string;
}
