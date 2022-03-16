import React from 'react';
import { LabelProps } from '../label';
import { InputElementProps } from './types';
export declare type InputTextProps = LabelProps & InputElementProps;
declare const InputText: React.ForwardRefExoticComponent<LabelProps & InputElementProps & React.RefAttributes<HTMLInputElement>>;
export default InputText;
