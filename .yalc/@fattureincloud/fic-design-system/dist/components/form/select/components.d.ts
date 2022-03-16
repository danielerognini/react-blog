import { OptionType } from './components/Option';
import { SelectProps } from './types';
export declare const getCustomComponents: <O extends OptionType = OptionType, IsMulti extends boolean = false>() => Partial<import("react-select/src/components").SelectComponents<O, IsMulti, import("react-select").GroupTypeBase<O>>> | undefined;
