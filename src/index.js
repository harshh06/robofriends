import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList' ;
import 'tachyons' ;
import reportWebVitals from './reportWebVitals';
import {robots} from './robots' ; // destructuring is required when not exporting defaults ... 
ReactDOM.render(
  <React.StrictMode>
    <CardList robots = {robots} />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
