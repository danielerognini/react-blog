import { BasePlacement } from '@popperjs/core';
import { MouseEventHandler, ReactNode } from 'react';
import { MessageProps } from './components/Message';
export interface TooltipProps extends MessageProps {
    message: string | JSX.Element;
    className?: string;
    children?: ReactNode;
    placement: BasePlacement;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
}
declare const Tooltip: ({ message, placement, className, children, type, onMouseEnter, onMouseLeave, }: TooltipProps) => JSX.Element;
export default Tooltip;
