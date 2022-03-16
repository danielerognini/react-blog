import { Component } from 'react';
import { ModalPropsInterface, ModalStateInterface } from './types';
export declare class Modal extends Component<ModalPropsInterface, ModalStateInterface> {
    constructor(props: ModalPropsInterface);
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateHeight: () => void;
    hasFooter: () => boolean;
    renderFooter: () => JSX.Element | undefined;
    handleModalClose: () => void;
    contentRefCallback: () => void;
    render(): JSX.Element;
}
