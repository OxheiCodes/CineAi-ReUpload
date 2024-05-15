import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

// Custom hook to fetch data from an API
const useFetch = (url) => {
 // State variables
 const [data, setData] = useState(null); // Data fetched from the API
 const [loading, setLoading] = useState(null); // Loading state
 const [error, setError] = useState(null); // Error state

 useEffect(() => {
   // Set loading state before API call
   setLoading("loading...");
   setData(null);
   setError(null);

   // Fetch data from the API
   fetchDataFromApi(url)
     .then((res) => {
       // Set data and stop loading on successful response
       setLoading(false);
       setData(res);
     })
     .catch((err) => {
       // Set error and stop loading on error
       setLoading(false);
       setError("Something went wrong!");
     });
 }, [url]); // Re-run the effect whenever the URL changes

 // Return the state variables
 return { data, loading, error };
};

export default useFetch;