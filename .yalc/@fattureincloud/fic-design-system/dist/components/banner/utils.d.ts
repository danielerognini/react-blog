import { DefaultTheme } from 'styled-components';
import { bannerColorType } from './Banner';
interface MappedColors {
    bgColor: string;
    textColor: string;
}
export declare const mapColors: (theme: DefaultTheme, color: bannerColorType) => MappedColors;
export {};
