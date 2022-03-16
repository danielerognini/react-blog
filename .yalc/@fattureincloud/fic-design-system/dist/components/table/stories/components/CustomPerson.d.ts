import { CustomPersonData } from './types';
interface Props {
    value: CustomPersonData;
}
declare const CustomPerson: ({ value: { img, name, role } }: Props) => JSX.Element;
export default CustomPerson;
