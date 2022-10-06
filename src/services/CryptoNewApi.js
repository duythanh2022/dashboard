import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewHeader = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '0f69fa3c76mshfbae875c65dbc83p1531e8jsn5cea15ca5817',
  'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
};
const baseUrl = "https://bing-web-search1.p.rapidapi.com";

const createApiNew = (url) => ({ url, headers: cryptoNewHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (category,count) => createApiNew(`/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
