import React from 'react';
import ReactModal from 'react-modal';
import { ModalPropsInterface, StyledModalBoxProps } from './types';
export declare const StyledReactModalContainer: import("styled-components").StyledComponent<typeof ReactModal, import("styled-components").DefaultTheme, ModalPropsInterface & {
    children: React.ReactChild;
}, never>;
export declare const StyledModalBox: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledModalBoxProps, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ModalPropsInterface, never>;
export declare const ModalHeaderClose: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalHeader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalSimpleHeader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalSimpleFooter: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalFooter: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TopAttachment: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    height: number | null;
}, never>;
export declare const BottomAttachment: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledIcon: import("styled-components").StyledComponent<({ onClick, isDisabled, ...props }: import("../icon").IconProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
