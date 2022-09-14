import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "x-rapidAPI-host": "coinranking1.p.rapidapi.com",
  "x-rapidAPI-key": "0f69fa3c76mshfbae875c65dbc83p1531e8jsn5cea15ca5817",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createApiRequest = (url)=>({url,headers:cryptoApiHeader})
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createApiRequest('/coins'),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
