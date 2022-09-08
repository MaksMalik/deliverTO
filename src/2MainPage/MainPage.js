import React from 'react'
import './MainPage.css'
import MainPageStart from './1MainPageStart/MainPageStart'
import WhyUs from './2MainPageWhyUs/WhyUs'
import MainPageOffer from './3MainPageOffer/MainPageOffer'
import MainPageContact from './4MainPageContact/MainPageContact'


function MainPage() {
  return (
    <div className="mainPage">
      <MainPageStart></MainPageStart>
      <WhyUs></WhyUs>
      <MainPageOffer></MainPageOffer>
      <MainPageContact></MainPageContact>
    </div>
  )
}

export default MainPage