import React from 'react';
interface Props {
    options: Array<{
        key: number;
        label: string;
    }>;
    value: number;
    onClick: (option: {
        key: number;
        label: string;
    }) => void;
    isDisabled?: boolean;
    renderOption?: (props: {
        isDisabled?: boolean;
        isChecked: boolean;
        label: string;
    }) => JSX.Element;
    optionsSpacing?: number;
    style?: React.CSSProperties;
    inline?: boolean;
}
export declare const RadioButtonGroup: (props: Props) => JSX.Element;
export {};
