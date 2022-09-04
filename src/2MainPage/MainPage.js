import React from 'react'
import './MainPage.css'
import MainPageStart from './MainPageStart/MainPageStart'
import WhyUs from './MainPageWhyUs/WhyUs'

function MainPage() {
  return (
    <div className="mainPage">
      <MainPageStart></MainPageStart>
      <WhyUs></WhyUs>
    </div>

  )
}

export default MainPage