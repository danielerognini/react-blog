import { PropsWithChildren } from 'react';
import { HeaderProps, TableToggleAllRowsSelectedProps } from 'react-table';
import { TableData } from '../../types';
interface Props<T extends TableData> {
    headerProps: PropsWithChildren<HeaderProps<T>>;
    selectSinglePage?: boolean;
}
interface ReturnType extends TableToggleAllRowsSelectedProps {
    disabled: boolean;
}
declare const useHeaderCheckboxProps: <T extends TableData>({ headerProps, selectSinglePage, }: Props<T>) => ReturnType;
export default useHeaderCheckboxProps;
