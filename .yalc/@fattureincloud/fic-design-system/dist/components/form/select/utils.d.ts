import { DefaultTheme } from 'styled-components';
import { OptionType } from './components/Option';
import { SelectStyles, SelectWrapperProps } from './SelectWrapper';
import { simpleValue } from './types';
interface GetSelectParams extends SelectWrapperProps {
    theme: DefaultTheme;
}
export declare const getSelectStyles: ({ theme, disabled, status }: GetSelectParams) => SelectStyles;
export declare const isSimpleValue: <O extends OptionType = OptionType>(value: simpleValue | O) => value is simpleValue;
export {};
