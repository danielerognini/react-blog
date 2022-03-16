import { Dispatch, SetStateAction } from 'react';
import { ValueType } from 'react-select';
import { OptionType } from '../components/Option';
declare type valueType<O extends OptionType = OptionType, IsMulti extends boolean = false> = ValueType<O, IsMulti>;
declare type ReturnType<O extends OptionType = OptionType, IsMulti extends boolean = false> = [
    valueType<O, IsMulti> | undefined,
    Dispatch<SetStateAction<valueType<O, IsMulti> | undefined>>
];
export declare const useSelectValue: <O extends OptionType = OptionType>(initialValue?: O | null) => ReturnType<O, false>;
export declare const useSelectMultiValues: <O extends OptionType = OptionType>(initialValue: import("react-select").OptionsType<O>) => ReturnType<O, true>;
export {};
