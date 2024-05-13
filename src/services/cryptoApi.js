import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const axios = require("axios");

const baseUrl = "https://coinranking1.p.rapidapi.com";

const cryptoApiHeaders = {
    "X-RapidAPI-Key": "0a78628b36msh6c6ba2a1fa4ba9fp17344ejsnc4fc60aff51c",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
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
