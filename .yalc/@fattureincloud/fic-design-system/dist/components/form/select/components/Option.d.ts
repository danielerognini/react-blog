import { OptionProps } from 'react-select';
import { OptionTypeBase } from 'react-select/src/types';
import { IconProps } from '../../../icon';
export interface OptionType extends OptionTypeBase {
    icon?: IconProps;
    label: string;
    value: string | number;
}
interface Props<O extends OptionType = OptionType, IsMulti extends boolean = false> extends Omit<OptionProps<O, IsMulti>, 'data'> {
    data: OptionType;
}
declare const Option: <O extends OptionType = OptionType, IsMulti extends boolean = false>({ innerProps: { onClick }, data: { label, icon }, }: Props<O, IsMulti>) => JSX.Element;
export default Option;
