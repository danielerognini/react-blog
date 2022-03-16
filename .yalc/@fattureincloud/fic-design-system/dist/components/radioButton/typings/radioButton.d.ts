/// <reference types="react" />
export interface RadioInterface {
    isDisabled?: boolean;
    isChecked: boolean;
}
export interface LabelInterface {
    isDisabled?: boolean;
}
export interface RadioButtonInterface extends RadioInterface {
    className?: string;
    label: string;
    inline?: boolean;
    onClick: () => void;
    optionsSpacing?: number;
    renderOption?: (props: {
        isDisabled?: boolean;
        isChecked: boolean;
        label: string;
    }) => JSX.Element;
}
export declare type TRadioButton = React.FunctionComponent<RadioButtonInterface>;
