import React from 'react';
declare type alignType = 'left' | 'center' | 'right';
interface Props extends React.HTMLAttributes<HTMLTableDataCellElement> {
    align?: alignType;
}
export declare const TableTd: import("styled-components").StyledComponent<({ children, align, ...rest }: Props) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export default TableTd;
