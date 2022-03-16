export interface CharCounterProps extends CharCounterOptions {
    length: number;
}
export interface CharCounterOptions {
    maxLength?: number;
}
declare const CharCounter: ({ length, maxLength }: CharCounterProps) => JSX.Element;
export default CharCounter;
