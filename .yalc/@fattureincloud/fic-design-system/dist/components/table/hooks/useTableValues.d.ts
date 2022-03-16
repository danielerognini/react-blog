import { Dispatch, SetStateAction } from 'react';
import { Row } from 'react-table';
import { TableData } from '../types';
interface Props {
    initialFilter?: string;
}
interface ReturnType<DataType extends TableData> {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
    selection: Row<DataType>[];
    setSelection: Dispatch<SetStateAction<Row<DataType>[]>>;
}
declare const useTableValues: <DataType extends TableData>({ initialFilter }?: Props) => ReturnType<DataType>;
export default useTableValues;
