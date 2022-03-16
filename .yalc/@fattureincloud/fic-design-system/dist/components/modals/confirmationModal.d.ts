/// <reference types="react" />
interface Props {
    title: string;
    type: 'success' | 'error' | 'warning' | 'info';
    description: string;
    question: string;
    actionText: string;
    onAction: () => void;
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
}
export declare const ConfirmationModal: (props: Props) => JSX.Element;
export {};
