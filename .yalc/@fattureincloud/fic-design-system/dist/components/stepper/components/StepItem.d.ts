import { stepStatusType } from '../types';
interface Props {
    text?: string;
    number: number;
    status: stepStatusType;
}
declare const StepItem: ({ text, number, status }: Props) => JSX.Element;
export declare type StepItemWrapperProps = Pick<Props, 'status'>;
export default StepItem;
