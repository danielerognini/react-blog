import { OptionType } from './components/Option';
import { AsyncCreatableSelectProps, AsyncSelectProps, CreatableSelectProps, SelectProps } from './types';
export declare const Select: <O extends OptionType = OptionType, IsMulti extends boolean = false>(props: SelectProps<O, IsMulti, import("react-select").Props<O, IsMulti, import("react-select").GroupTypeBase<O>>>) => JSX.Element;
export declare const CreatableSelect: <O extends OptionType = OptionType, IsMulti extends boolean = false>(props: CreatableSelectProps<O, IsMulti>) => JSX.Element;
export declare const AsyncSelect: <O extends OptionType = OptionType, IsMulti extends boolean = false>(props: AsyncSelectProps<O, IsMulti>) => JSX.Element;
export declare const AsyncCreatableSelect: <O extends OptionType = OptionType, IsMulti extends boolean = false>(props: AsyncCreatableSelectProps<O, IsMulti>) => JSX.Element;
