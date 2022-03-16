import { FileRejection } from 'react-dropzone';
import { CustomPalette, FileType, FileUploaderSize, FileUploaderStatus } from './types';
export declare type fileUploaderOnDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
export interface FileUploaderProps {
    allowedTypes: FileType[];
    className?: string;
    multiple?: boolean;
    onDrop: fileUploaderOnDrop;
    size?: FileUploaderSize;
    status?: FileUploaderStatus;
    customPalette?: CustomPalette;
}
declare const FileUploader: ({ allowedTypes, customPalette, className, multiple, onDrop, size, status, }: FileUploaderProps) => JSX.Element;
export default FileUploader;
