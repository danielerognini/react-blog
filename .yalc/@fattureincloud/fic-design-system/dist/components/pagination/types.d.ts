export declare type PaginationProps = {
    pageSize: number;
    listSize: number;
    changePageAction: (pageNumber: number) => void;
    nextPageAction?: () => void;
    prevPageAction?: () => void;
    currentPage: number;
    prevText: string;
    nextText: string;
};
