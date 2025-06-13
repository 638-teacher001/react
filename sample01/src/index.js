import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MainTest from './test/MainTest';
//import DataBase01 from './app10/DataBase01';
//import MainMember from './app01/MainMember';
import MainDB from './db/MainDB';
// import MainSpa from './sample/MainSpa';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainDB />
    {/* <MainTest /> */}
    {/* <MainMember /> */}
    {/* <MainDB /> */}
    {/* <MainSpa /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
