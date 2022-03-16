import React from 'react';
import { ModalPropsInterface } from '../types';
declare type PropTypes = {
    handleChangeValue: (value: string) => void;
    value: string;
    placeholder: string;
    children: React.ReactChild;
};
declare type TModalSearchable = React.FunctionComponent<PropTypes & Omit<ModalPropsInterface, 'header'>>;
declare const ModalSearchable: TModalSearchable;
export default ModalSearchable;
