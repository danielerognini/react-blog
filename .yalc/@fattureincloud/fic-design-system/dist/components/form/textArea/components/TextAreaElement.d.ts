import { BoxedInputWrapperProps } from '../../common/styles';
import { TextAreaElementProps } from '../types';
declare const TextAreaElement: ({ autoFocus, onBlur, onChange, value, placeholder, disabled, name, onKeyPress, status, onKeyDown, onKeyUp, onFocus, className, setValue, initialHeight, maxLength, isResizable, showCounter, isPrefilled, }: TextAreaElementProps) => JSX.Element;
export declare type TextAreaWrapperProps = Pick<TextAreaElementProps, 'disabled' | 'status' | 'initialHeight' | 'isResizable' | 'isPrefilled'>;
export declare type TextAreaStyles = Omit<BoxedInputWrapperProps, 'status'>;
export default TextAreaElement;
