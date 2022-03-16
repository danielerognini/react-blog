import { DefaultTheme } from 'styled-components';
import { ItemStatusStyles } from '../stepperPalette';
import { StepItemWrapperProps } from './StepItem';
interface GetStemItemsParams extends StepItemWrapperProps {
    theme: DefaultTheme;
}
export declare const getStepItemStyles: ({ theme, status }: GetStemItemsParams) => ItemStatusStyles;
export {};
