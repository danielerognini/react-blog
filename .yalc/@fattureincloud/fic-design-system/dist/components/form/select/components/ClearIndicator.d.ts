import { IndicatorProps } from 'react-select/src/components/indicators';
import { OptionType } from './Option';
declare const ClearIndicator: <O extends OptionType = OptionType, IsMulti extends boolean = false>({ isDisabled, clearValue, }: IndicatorProps<O, IsMulti, import("react-select").GroupTypeBase<O>>) => JSX.Element;
export default ClearIndicator;
