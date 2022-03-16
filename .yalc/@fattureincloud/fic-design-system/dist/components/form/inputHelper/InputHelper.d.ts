import { ReactChild } from 'react';
import { IconProps } from '../../icon';
import { inputHelperStatus } from './types';
export interface InputHelperProps extends WrapperProps {
    message: ReactChild;
    icon?: IconProps | null;
}
declare const InputHelper: ({ status, message, icon }: InputHelperProps) => JSX.Element;
interface WrapperProps {
    status: inputHelperStatus;
}
export default InputHelper;
