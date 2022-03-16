import { UseMeasureRef } from 'react-use/lib/useMeasure';
interface ReturnType {
    elementsWrapperRef: UseMeasureRef<HTMLDivElement>;
    wrapperWidth: number;
}
declare const useResizedWidth: () => ReturnType;
export default useResizedWidth;
