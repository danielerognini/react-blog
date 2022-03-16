/// <reference types="react" />
import { CommonComponentsProps, ItemType } from '../types';
interface ItemElementType extends ItemType, CommonComponentsProps {
}
declare const ItemElement: (props: ItemElementType) => JSX.Element;
export default ItemElement;
