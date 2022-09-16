import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewHeader = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '0f69fa3c76mshfbae875c65dbc83p1531e8jsn5cea15ca5817',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};
const baseUrlCryptoNew = "https://bing-news-search1.p.rapidapi.com";

const createApiNew = (url) => ({ url, headers: cryptoNewHeader });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrlCryptoNew }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createApiNew(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
