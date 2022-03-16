import React from 'react';
import { ThemeProviderProps } from 'styled-components';
import { Theme } from '../../styles/theme';
interface Props extends Omit<ThemeProviderProps<Theme>, 'children'> {
    children: React.ReactNode | React.ReactNode[];
}
declare const ThemeProvider: ({ children, theme }: Props) => JSX.Element;
export default ThemeProvider;
