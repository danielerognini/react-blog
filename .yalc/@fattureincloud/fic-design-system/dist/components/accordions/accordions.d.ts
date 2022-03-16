import { Component } from 'react';
import { TAccordion, UnstyledAccordionProps, UnstyledAccordionState } from './types';
export declare class UnstyledAccordion extends Component<UnstyledAccordionProps, UnstyledAccordionState> {
    constructor(props: UnstyledAccordionProps);
    handleOpenAccordion: () => void;
    render(): JSX.Element;
}
declare const Accordion: TAccordion;
export default Accordion;
