import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import NavBar from './1NavBar/NavBar';
import MainPage from './2MainPage/MainPage';
import Footer from './3Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar></NavBar>
    <MainPage></MainPage>
    <Footer></Footer>
  </>
);