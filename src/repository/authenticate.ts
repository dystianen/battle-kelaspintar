import {http} from "@/utils/http";
import useSWR from "swr";

const url = {
    getAllData: () => '/register/get-initial-data',
};

const hooks = {
    useGetAllData() {
        return useSWR(url.getAllData(), http.fetcher)
    },
};

const api = {};

export const authenticateRepository = {
    url,
    hooks,
    api,
};
