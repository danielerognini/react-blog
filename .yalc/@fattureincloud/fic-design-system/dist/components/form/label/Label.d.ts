/// <reference types="react" />
export interface LabelProps extends WrapperProps {
    label?: string | JSX.Element;
}
declare const Label: ({ label, disabled, required }: LabelProps) => JSX.Element | null;
interface WrapperProps {
    disabled?: boolean;
    required?: boolean;
}
export default Label;
