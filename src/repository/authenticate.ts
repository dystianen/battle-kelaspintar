import {http} from "@/utils/http";
import useSWR from "swr";

const url = {
    getSchool: () => '/school',
    getClass: () => '/class',
};

const hooks = {
    useGetSchool() {
        return useSWR(url.getSchool(), http.fetcher)
    },
    useGetClass() {
        return useSWR(url.getClass(), http.fetcher)
    },
};

const api = {};

export const authenticateRepository = {
    url,
    hooks,
    api,
};
