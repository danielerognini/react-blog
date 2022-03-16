import { ReactText } from 'react';
interface Props extends PageButtonWrapperProps {
    text: ReactText;
    onClick: () => void;
}
declare const PageButton: ({ text, onClick, isActive }: Props) => JSX.Element;
export interface PageButtonWrapperProps {
    isActive: boolean;
}
export default PageButton;
