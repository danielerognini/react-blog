/// <reference types="react" />
import { TagParts } from './tagPalette';
import { StyledTagProps } from './types';
export declare const LeftIcon: import("styled-components").StyledComponent<({ onClick, isDisabled, ...props }: import("../icon").IconProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const RightIcon: import("styled-components").StyledComponent<({ onClick, isDisabled, ...props }: import("../icon").IconProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const Text: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledTag: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TagParts & StyledTagProps, import("./tagPalette").tagParts>;
