import { ControlProps } from 'react-select';
import { OptionType } from './Option';
declare const Control: <O extends OptionType = OptionType, IsMulti extends boolean = false>({ innerProps: { onMouseDown }, children, }: ControlProps<O, IsMulti, import("react-select").GroupTypeBase<O>>) => JSX.Element;
export default Control;
