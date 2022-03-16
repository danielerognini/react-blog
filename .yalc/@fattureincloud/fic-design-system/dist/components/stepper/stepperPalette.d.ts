import { paletteColor } from '../../styles/types';
import { stepStatusType } from './types';
export interface ItemStatusStyles {
    color: paletteColor;
    circleBackground: paletteColor;
    circleTextColor: paletteColor;
}
declare type ItemPalette = {
    [k in stepStatusType]: ItemStatusStyles;
};
export interface StepperPalette {
    item: ItemPalette;
}
declare const stepperPalette: StepperPalette;
export default stepperPalette;
