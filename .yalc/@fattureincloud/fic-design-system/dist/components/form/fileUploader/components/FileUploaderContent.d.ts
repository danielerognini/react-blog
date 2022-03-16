import React from 'react';
import { IconProps } from '../../../icon';
import { FileUploaderSize, statuses } from '../types';
interface Props {
    icon: IconProps | null;
    status: statuses;
    text?: React.ReactChild | null;
    caption?: React.ReactChild | null;
    size: FileUploaderSize;
}
declare const FileUploaderContent: ({ icon, status, text, caption, size }: Props) => JSX.Element;
export default FileUploaderContent;
