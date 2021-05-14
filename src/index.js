/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './client/App';
import './client/styles/index.scss';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>  
, document.getElementById('app'));