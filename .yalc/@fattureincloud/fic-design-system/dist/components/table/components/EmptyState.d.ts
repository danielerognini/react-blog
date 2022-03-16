/// <reference types="react" />
export interface EmptyTablePageProps {
    columnsCount: number;
    EmptyPage?: JSX.Element;
}
declare const EmptyState: ({ columnsCount, EmptyPage }: EmptyTablePageProps) => JSX.Element;
export default EmptyState;
