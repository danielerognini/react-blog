import { MouseEventHandler } from 'react';
interface Params {
    onClick?: MouseEventHandler;
    manualLock?: boolean;
    timeMs?: number;
}
declare const useDebounceClick: ({ manualLock, onClick, timeMs }: Params) => MouseEventHandler;
export default useDebounceClick;
