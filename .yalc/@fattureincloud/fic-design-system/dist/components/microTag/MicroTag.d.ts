import { TagType } from './types';
export interface MicroTagProps {
    text: string;
    type: TagType;
}
declare const MicroTag: ({ text, type }: MicroTagProps) => JSX.Element;
export default MicroTag;
