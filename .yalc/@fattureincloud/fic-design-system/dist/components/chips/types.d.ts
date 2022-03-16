/// <reference types="react" />
export interface ChipsProps {
    text?: string | number;
    statusEdit?: boolean;
    closeAction?: () => void;
}
export declare type TChip = React.FunctionComponent<ChipsProps>;
export interface UnstyledChipProps extends ChipsProps {
}
export interface UnstyledChipState {
}
