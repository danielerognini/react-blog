/// <reference types="react" />
import { ButtonProps } from './Button';
import { ButtonStyles, WrapperProps } from './types';
export declare const LeftIcon: import("styled-components").StyledComponent<({ onClick, isDisabled, ...props }: import("../../icon").IconProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const RightIcon: import("styled-components").StyledComponent<({ onClick, isDisabled, ...props }: import("../../icon").IconProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const ButtonSpinner: import("styled-components").StyledComponent<({ className }: import("../../../common/components/Spinner").Props) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const Text: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    isLoading: ButtonProps['isLoading'];
}, never>;
export declare const HrefWrapper: import("styled-components").StyledComponent<"a", import("styled-components").DefaultTheme, ButtonStyles & WrapperProps, keyof ButtonStyles>;
export declare const OnClickWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ButtonStyles & WrapperProps, keyof ButtonStyles>;
