import { roleType } from './Role';
export interface CustomPersonData {
    img: string;
    name: string;
    role?: roleType;
}
export interface DataType {
    person: CustomPersonData;
    name: string;
    address: string;
    date: string;
    order: number;
    isDisabled?: boolean;
}
