import { Dispatch, InputHTMLAttributes, ReactText, SetStateAction } from 'react';
import { IconProps } from '../../icon';
import { CommonFormTypes } from '../common/types';
import { UnitDropdownProps } from './components/UnitDropdown';
export declare const inputTypesArray: readonly ["password", "text", "number"];
export declare type inputTypes = typeof inputTypesArray[number];
export interface InputElementProps extends CommonFormTypes, Pick<InputHTMLAttributes<HTMLInputElement>, 'autoFocus' | 'name' | 'onChange' | 'onBlur' | 'onFocus' | 'onKeyPress' | 'onKeyUp' | 'onKeyDown' | 'required' | 'className'> {
    leadingIcon?: IconProps;
    actionIcon?: IconProps;
    inputType?: inputTypes;
    placeholder?: ReactText;
    value?: number | string | null;
    setValue?: Dispatch<SetStateAction<string>>;
    isPrefilled?: boolean;
    isTransparent?: boolean;
    unitDropdownProps?: UnitDropdownProps;
}
