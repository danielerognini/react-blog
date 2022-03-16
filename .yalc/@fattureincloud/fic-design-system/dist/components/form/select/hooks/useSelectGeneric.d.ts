import { OptionType } from '../components/Option';
import { AsyncCreatableSelectProps, AsyncSelectProps, CreatableSelectProps, SelectProps } from '../types';
declare type Props<O extends OptionType = OptionType, IsMulti extends boolean = false> = SelectProps<O, IsMulti> | CreatableSelectProps<O, IsMulti> | AsyncSelectProps<O, IsMulti> | AsyncCreatableSelectProps<O, IsMulti>;
interface ReturnType<O extends OptionType = OptionType, IsMulti extends boolean = false> {
    customComponents: Partial<SelectProps<O, IsMulti>['components']>;
    styles: SelectProps<O, IsMulti>['styles'];
    value: SelectProps<O, IsMulti>['value'];
}
declare const useSelectGeneric: <O extends OptionType = OptionType, IsMulti extends boolean = false>(props: Props<O, IsMulti>) => ReturnType<O, IsMulti>;
export default useSelectGeneric;
