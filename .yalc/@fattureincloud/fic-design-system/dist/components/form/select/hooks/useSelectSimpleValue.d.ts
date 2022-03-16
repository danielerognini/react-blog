import { OptionType } from '../components/Option';
import { SelectProps, simpleValue } from '../types';
declare type ReturnType<O extends OptionType = OptionType> = {
    simpleValue: simpleValue;
    onChange: Required<SelectProps<O>>['onChange'];
};
declare const useSelectSimpleValue: <O extends OptionType = OptionType>(initialValue: simpleValue) => ReturnType<O>;
export default useSelectSimpleValue;
