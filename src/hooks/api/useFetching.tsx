import { ErrorResponse } from "@/types/response.type";
import { useCallback, useState } from "react";

type useFetchingResponse<T> = {
    error: ErrorResponse;
    data: T | null;
};

export function useFetching<T>(fn: (...args) => Promise<T>): {
    execute<U>(payload?: U): Promise<useFetchingResponse<T>>;
    loading: boolean;
} {
    const [loading, setLoading] = useState<boolean>(false);

    const execute = useCallback(
        async <U,>(payload?: U): Promise<useFetchingResponse<T>> => {
            setLoading(true);
            try {
                const data = await fn(payload);
                return {
                    data,
                    error: null,
                };
            } catch (error) {
                return {
                    data: null,
                    error,
                };
            } finally {
                setLoading(false);
            }
        },
        [fn]
    );

    return { execute, loading };
}
