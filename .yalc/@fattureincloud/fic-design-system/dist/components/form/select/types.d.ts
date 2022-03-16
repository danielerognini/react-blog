import { Props as AsyncProps } from 'react-select/src/Async';
import { Props as AsyncCreatableProps } from 'react-select/src/AsyncCreatable';
import { Props as CreatableProps } from 'react-select/src/Creatable';
import { NamedProps, Props as ReactSelectProps } from 'react-select/src/Select';
import { CommonFormTypes } from '../common/types';
import { LabelProps } from '../label';
import { OptionType } from './components/Option';
import { CustomStylesType } from './hooks/useSelectThemeStyles';
export declare type SelectProps<O extends OptionType = OptionType, IsMulti extends boolean = false, T = ReactSelectProps<O, IsMulti>> = CommonFormTypes & LabelProps & T & NamedProps<O, IsMulti> & {
    isPrefilled?: boolean;
    customStyles?: CustomStylesType<O, IsMulti>;
    isTransparent?: boolean;
    simpleValue?: simpleValue;
};
export declare type CreatableSelectProps<O extends OptionType = OptionType, IsMulti extends boolean = false> = SelectProps<O, IsMulti, CreatableProps<O, IsMulti>>;
export declare type AsyncSelectProps<O extends OptionType = OptionType, IsMulti extends boolean = false> = SelectProps<O, IsMulti, AsyncProps<O, IsMulti>>;
export declare type AsyncCreatableSelectProps<O extends OptionType = OptionType, IsMulti extends boolean = false> = SelectProps<O, IsMulti, AsyncCreatableProps<O, IsMulti>>;
export declare type simpleValue = string | number | null | undefined;
