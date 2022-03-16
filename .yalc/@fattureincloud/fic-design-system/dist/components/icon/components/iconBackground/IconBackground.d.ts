import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { paletteColor } from '../../../../styles/types';
import { iconColors } from '../../iconPalette';
interface Props extends WrapperProps {
    children: React.ReactNode;
}
declare const IconBackground: ({ children, ...rest }: Props) => JSX.Element;
interface WrapperProps {
    color: iconColors;
    size: SizeProp;
    backgroundColor?: paletteColor;
    className?: string;
}
export default IconBackground;
