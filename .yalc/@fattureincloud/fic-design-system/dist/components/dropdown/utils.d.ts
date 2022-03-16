import { DefaultTheme } from 'styled-components';
import { paletteColor } from '../../styles/types';
import { StyledItemProps } from './components/Item';
interface GetDropdownItemStylesParams extends StyledItemProps {
    theme: DefaultTheme;
}
export interface DropdownItemStyles {
    opacity: number;
    background: paletteColor;
    color: paletteColor;
    hoverBackground: paletteColor;
    cursor: string;
}
export declare const getDropdownItemStyles: ({ theme, isDisabled, active, hasAction, type, }: GetDropdownItemStylesParams) => DropdownItemStyles;
export {};
