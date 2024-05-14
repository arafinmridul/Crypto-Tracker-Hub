import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const axios = require("axios");

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

const cryptoApiHeaders = {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest("/coins"),
        }),
    }),
});

// aligned with getCryptos to make automated hook
export const { useGetCryptosQuery } = cryptoApi;

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }
