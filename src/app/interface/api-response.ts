export interface IAPIResponse {
    code:    number;
    status:  string;
    message: string;
    data:    any;
}

export interface IAPIResponsePagination {
    code:    number;
    status:  string;
    message: string;
    data:    IDataResponsePagination;
}


export interface IDataResponsePagination {
    page:       number;
    size:       number;
    totalPages: number;
    list:       any;
}
