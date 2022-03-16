import React from 'react';
import { BoxedInputWrapperProps } from '../../common/styles';
import { InputElementProps } from '../types';
declare type inputRef = HTMLInputElement | null;
declare const InputElement: React.ForwardRefExoticComponent<InputElementProps & React.RefAttributes<inputRef>>;
export declare type InputTextWrapperProps = Pick<InputElementProps, 'disabled' | 'status' | 'isPrefilled' | 'isTransparent'>;
export declare type InputTextStyles = Omit<BoxedInputWrapperProps, 'status'>;
export default InputElement;
