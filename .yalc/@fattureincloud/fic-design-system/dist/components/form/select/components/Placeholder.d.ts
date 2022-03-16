import { PlaceholderProps } from 'react-select';
import { OptionType } from './Option';
declare const Placeholder: <O extends OptionType = OptionType, IsMulti extends boolean = false>({ children, }: PlaceholderProps<O, IsMulti, import("react-select").GroupTypeBase<O>>) => JSX.Element;
export default Placeholder;
