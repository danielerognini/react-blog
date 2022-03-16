import { colorsPalette } from '../../../common/types/colorsPalette';
import { IconProps } from '../../icon';
import { inputHelperStatus } from './types';
interface InputHelperParts extends colorsPalette {
    defaultIcon: IconProps | null;
}
export declare type InputHelperPalette = {
    [k in inputHelperStatus]: InputHelperParts;
};
declare const inputHelperPalette: InputHelperPalette;
export default inputHelperPalette;
