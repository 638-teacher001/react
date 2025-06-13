import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import StsMain from './sts/StsMain';
//import StsMain from './stsapp/StsMain';
//import StsMain from './stscs/StsMain';
//import DataBase01 from './sts_diary/DataBase01';
//import MainDiary from './sts_diary/MainDiary';
import Sample01 from './sts_diary/Sample01';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sample01 />
    {/* <MainDiary /> */}
    {/* <DataBase01 /> */}
    {/* <StsMain /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
