import { paletteColor } from '../../../styles/types';
import { checkboxParts, checkboxState, checkboxStatus } from './types';
export declare type CheckboxPalette = {
    input: {
        [k in checkboxState]: {
            [k in checkboxStatus]: {
                [k in checkboxParts]: paletteColor;
            };
        };
    };
    label: {
        [k in checkboxState]: paletteColor;
    };
};
declare const checkboxPalette: CheckboxPalette;
export default checkboxPalette;
