import { Dispatch, SetStateAction, TextareaHTMLAttributes } from 'react';
import { CommonFormTypes } from '../common/types';
import { CharCounterOptions } from './components/CharCounter';
export interface TextAreaElementProps extends CommonFormTypes, CharCounterOptions, Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'autoFocus' | 'placeholder' | 'name' | 'onChange' | 'onBlur' | 'onFocus' | 'onKeyPress' | 'onKeyUp' | 'onKeyDown' | 'required' | 'className'> {
    initialHeight?: string;
    value?: string | null;
    setValue?: Dispatch<SetStateAction<string>>;
    showCounter?: boolean;
    isResizable?: boolean;
    isPrefilled?: boolean;
}
