import { checkboxStatus } from '../types';
interface UseCheckboxValueReturn {
    status: checkboxStatus;
    value: boolean;
    setCheck: () => void;
    setUncheck: () => void;
    setIndeterminate: () => void;
    toggleCheckbox: () => void;
}
declare const useCheckboxValue: (initialValue?: checkboxStatus | boolean) => UseCheckboxValueReturn;
export default useCheckboxValue;
