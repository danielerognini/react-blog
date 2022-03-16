import { IndicatorProps } from 'react-select';
import { OptionType } from './Option';
declare const DropdownIndicator: <O extends OptionType = OptionType, IsMulti extends boolean = false>({ selectProps, }: IndicatorProps<O, IsMulti, import("react-select").GroupTypeBase<O>>) => JSX.Element;
export default DropdownIndicator;
