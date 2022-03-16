import { FileUploaderSize, statuses } from './types';
interface ContainerProps {
    status: statuses;
    size: FileUploaderSize;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerProps, never>;
export declare const OnDraggingOverlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerProps, never>;
export declare const MainText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    status: statuses;
}, never>;
export declare const CaptionText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    status: statuses;
}, never>;
export {};
