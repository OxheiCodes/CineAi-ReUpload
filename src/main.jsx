// Code written by: Richard (OxheiCodes)
// This code sets up the entry point for a React application and renders the main App component.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss' // Imports global SCSS styles

import { store } from "./store/store" // Imports the Redux store
import { Provider } from 'react-redux' // Imports the React-Redux Provider component

// Renders the React application within the root element
ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <App />
 </Provider>
)
