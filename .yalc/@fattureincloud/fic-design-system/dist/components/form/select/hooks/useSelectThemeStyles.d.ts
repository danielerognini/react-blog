import { Styles } from 'react-select';
import { CSSObject } from 'styled-components';
import { statusType } from '../../common/types';
import { OptionType } from '../components/Option';
import { SelectProps } from '../types';
export declare type CustomStylesType<O extends OptionType = OptionType, IsMulti extends boolean = false> = Partial<Record<keyof Styles<O, IsMulti>, CSSObject>>;
interface Props<O extends OptionType = OptionType, IsMulti extends boolean = false> {
    customStyles?: CustomStylesType<O, IsMulti>;
    status: statusType;
    disabled?: boolean;
}
declare const useSelectThemeStyles: <O extends OptionType = OptionType, IsMulti extends boolean = false>({ customStyles, status, disabled, }: Props<O, IsMulti>) => Partial<Styles<O, IsMulti, import("react-select").GroupTypeBase<O>>> | undefined;
export default useSelectThemeStyles;
