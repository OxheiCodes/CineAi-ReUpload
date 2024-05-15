// Code written by: Richard (OxheiCodes)
// This code exports a utility function to fetch data from the TMDB API.

import axios from "axios";

// Base URL for the TMDB API
const BASE_URL = "https://api.themoviedb.org/3";

// TMDB API access token (imported from environment variables)
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Headers to include the API access token
const headers = {
 Authorization: "bearer " + TMDB_TOKEN,
};

// Function to fetch data from the TMDB API
export const fetchDataFromApi = async (url, params) => {
 try {
   // Make a GET request to the API endpoint
   const { data } = await axios.get(BASE_URL + url, {
     headers, // Include the headers with the API access token
     params, // Include any query parameters
   });
   return data; // Return the response data
 } catch (err) {
   console.log(err); // Log any errors
   return err; // Return the error
 }
};