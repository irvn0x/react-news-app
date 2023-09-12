import React from "react";
import axios from "axios";

const NEWS_API_BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({ searchQuery = "bitcoin" }) => {
  try {
    /* URL
    https://newsapi.org/v2/everything?q=bitcoin&apiKey=your_api_key
    */
    const path = "/everything";
    const query = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
    const endPointURL = `${NEWS_API_BASE_URL}${path}${query}`;

    const res = await axios.get(endPointURL);

    if (res.status === 200) {
      const additionalObj = {
        category: searchQuery,
      };

      const resData = {
        ...res.data,
        ...additionalObj,
      };

      return resData;
    }
  } catch (error) {
    console.error("Error getting Tech News: ", error);
  }
};
