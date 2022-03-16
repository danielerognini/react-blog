/// <reference types="react" />
import { CommonComponentsProps, GroupType } from '../types';
interface GroupElementType extends GroupType, CommonComponentsProps {
}
declare const GroupElement: ({ index, items, title, ...rest }: GroupElementType) => JSX.Element;
export default GroupElement;
