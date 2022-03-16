import { DefaultTheme } from 'styled-components';
import { paletteColor } from '../../styles/types';
import { TableBodyTrProps } from './components/TableBody';
interface GetTableBodyTrStylesParams extends TableBodyTrProps {
    theme: DefaultTheme;
}
export interface TableBodyTrStyles {
    background: paletteColor;
    color: paletteColor;
    hoverColor: paletteColor;
    hoverBackground: paletteColor;
}
export declare const getTableBodyTrStyles: ({ theme, isDisabled, isSelected, }: GetTableBodyTrStylesParams) => TableBodyTrStyles;
export {};
