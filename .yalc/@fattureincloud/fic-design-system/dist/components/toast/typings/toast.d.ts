import React, { ReactNode } from 'react';
import { ToastPosition } from 'react-toastify/dist/types';
import { IconProps } from '../../icon';
export declare type toastType = 'standard' | 'error' | 'info' | 'warning' | 'success';
export interface ToastProps {
    type?: toastType;
    content?: ReactNode;
    icon?: IconProps;
    actionLabel?: string;
    onActionClick?: () => void;
    autoClose?: false;
}
export interface ToastContentProps {
    title: ReactNode;
    content?: ReactNode;
    icon: IconProps;
    actionLabel?: string;
    onActionClick?: () => void;
}
export interface ToastInterface {
    Container: React.FC<ToastContainerProps>;
    show: (title: ReactNode, options: ToastProps) => string | undefined;
    dismiss: (toastId: string | undefined) => void;
    success: (title: ReactNode, options?: ToastProps) => string | undefined;
    error: (title: ReactNode, options?: ToastProps) => string | undefined;
    info: (title: ReactNode, options?: ToastProps) => string | undefined;
    warning: (title: ReactNode, options?: ToastProps) => string | undefined;
    standard: (title: ReactNode, options?: ToastProps) => string | undefined;
}
export interface ToastContainerProps {
    position: ToastPosition;
}
