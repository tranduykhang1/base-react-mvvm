export type ErrorResponse = {
        message: string;
        trace?: unknown
};

export type SuccessResponse<T> = {
        message: string;
        data: T
};