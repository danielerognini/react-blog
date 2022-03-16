import { DefaultTheme } from 'styled-components';
import { MicroTagParts } from './microTagPalette';
import { TagType } from './types';
export interface MappedProps {
    backgroundColor: string;
    color: string;
}
interface MapColorsParams {
    theme: DefaultTheme;
    type: TagType;
}
export declare const getMicroTagStyles: ({ theme, type }: MapColorsParams) => MicroTagParts;
export {};
