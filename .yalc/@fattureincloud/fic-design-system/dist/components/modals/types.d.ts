import { ReactNode } from 'react';
import { ButtonProps } from '../buttons/button/Button';
export interface ModalStateInterface {
    topAttachmentHeight: number;
    fullScreenHeight: number;
}
export interface ModalPropsInterface {
    isOpen?: boolean;
    title?: string;
    header?: () => JSX.Element;
    customHeader?: () => JSX.Element;
    footer?: () => JSX.Element;
    footerButtons?: ButtonProps[];
    customFooter?: () => JSX.Element;
    allowClose?: boolean;
    onActionClose?: () => void;
    isFullscreen?: boolean;
    isSmall?: boolean;
    minHeight?: number;
    height?: number;
    bottomAttachment?: () => ReactNode;
    topAttachment?: () => ReactNode;
    className?: string;
    onAfterOpen?: (obj?: {
        overlayEl: Element;
        contentEl: HTMLDivElement;
    }) => void;
}
export interface StyledModalBoxProps {
    isFullscreen?: boolean;
    isSmall?: boolean;
    fullScreenHeight: number;
}
