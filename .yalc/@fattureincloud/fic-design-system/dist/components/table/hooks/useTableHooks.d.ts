import { PluginHook } from 'react-table';
import { TableProps } from '../Table';
import { TableData } from '../types';
declare type Props<T extends TableData> = Pick<TableProps<T>, 'actions' | 'withCheckbox' | 'renderActions'>;
declare const useTableHooks: <T extends TableData>({ actions, renderActions, withCheckbox }: Props<T>) => PluginHook<T>[];
export default useTableHooks;
