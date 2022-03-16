import { FileUploaderParts } from './fileUploaderPalette';
export declare const uploaderStatusesArray: readonly ["default", "uploading", "success", "error", "disabled"];
export declare type FileUploaderStatus = typeof uploaderStatusesArray[number];
export declare type statuses = FileUploaderStatus | 'dragging';
export declare const uploaderSize: readonly ["small", "normal"];
export declare type FileUploaderSize = typeof uploaderSize[number];
export declare const typesArray: readonly ["unknown", "pdf", "image", "zip", "archive", "text", "document", "spreadsheet", "presentation", "xml", "csv"];
export declare type FileType = typeof typesArray[number];
declare type TypeDefinition = {
    mimeTypes: string[];
    extensions: string[];
};
export declare type FileTypesMap = Record<FileType, TypeDefinition>;
export declare type CustomPaletteParts = Pick<FileUploaderParts, 'text' | 'caption' | 'icon'>;
export declare type CustomPalette = {
    [key in statuses]?: Partial<CustomPaletteParts>;
};
export {};
