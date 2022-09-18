import React from 'react'
import './MainPage.css'
import MainPageStart from './1MainPageStart/MainPageStart'
import WhyUs from './2MainPageWhyUs/WhyUs'
import MainPageOffer from './3MainPageOffer/MainPageOffer'


function MainPage() {
  
  return (
    <div className="mainPage">
      <MainPageStart></MainPageStart>
      <WhyUs></WhyUs>
      <MainPageOffer></MainPageOffer>
    </div>
  )
}

export default MainPage