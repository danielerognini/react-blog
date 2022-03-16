import { ReactNode } from 'react';
import { ToastProps } from './typings/toast';
export declare const show: (title: ReactNode, options: ToastProps) => string | undefined;
export declare const dismiss: (toastId: string | undefined) => void;
export declare const success: (title: ReactNode, options?: ToastProps | undefined) => string | undefined;
export declare const error: (title: ReactNode, options?: ToastProps | undefined) => string | undefined;
export declare const warning: (title: ReactNode, options?: ToastProps | undefined) => string | undefined;
export declare const standard: (title: ReactNode, options?: ToastProps | undefined) => string | undefined;
export declare const info: (title: ReactNode, options?: ToastProps | undefined) => string | undefined;
