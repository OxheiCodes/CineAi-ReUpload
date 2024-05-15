// Code written by: Richard (OxheiCodes)
// This is the main App component that sets up the routing and fetches initial data for the application.

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';

function App() {
 const dispatch = useDispatch();
 const { url } = useSelector((state) => state.home);
 console.log(url);

 useEffect(() => {
   fetchApiConfig(); // Invoke method to fetch API configuration
   genresCall(); // Invoke method to fetch genres
 }, []); // Empty dependency array to run only once on component mount

 // Function to fetch API configuration
 const fetchApiConfig = () => {
   fetchDataFromApi('/configuration')
     .then((res) => {
       console.log(res);
       const url = {
         backdrop: res.images.secure_base_url + "original",
         poster: res.images.secure_base_url + "original",
         profile: res.images.secure_base_url + "original",
       }
       dispatch(getApiConfiguration(url)) // Dispatch action to store API configuration in Redux store
     });
 };

 // Function to fetch genres
 const genresCall = async () => {
   let promises = [];
   let endPoints = ["tv", "movie"];
   let allGenres = {};

   endPoints.forEach((url) => {
     promises.push(fetchDataFromApi(`/genre/${url}/list`));
   });

   const data = await Promise.all(promises);
   console.log(data);

   data.map(({ genres }) => {
     return genres.map((item) => (allGenres[item.id] = item));
   });

   dispatch(getGenres(allGenres)); // Dispatch action to store genres in Redux store
 };

 return (
   <BrowserRouter>
     <Header />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/:mediaType/:id' element={<Details />} />
       <Route path='/search/:query' element={<SearchResult />} />
       <Route path='/explore/:mediaType' element={<Explore />} />
       <Route path='*' element={<PageNotFound />} />
     </Routes>
     <Footer />
   </BrowserRouter>
 )
}

export default App
