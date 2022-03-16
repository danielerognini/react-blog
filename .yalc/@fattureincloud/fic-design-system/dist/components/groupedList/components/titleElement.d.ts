/// <reference types="react" />
import { GroupType } from '../types';
interface Props {
    title: GroupType['title'];
    noResults: boolean;
}
declare const TitleElement: (props: Props) => JSX.Element;
export default TitleElement;
