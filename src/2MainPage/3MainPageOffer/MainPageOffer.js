import React, { useState } from 'react'
import './MainPageOffer.css'
import MainPageContact from '../4MainPageContact/MainPageContact'
import { Button } from '@mui/material'

function MainPageOffer () {
  const [packages, setPackages] = useState(1)

  const packagesChangeStandard = () => {
    setPackages(1)
    document.location = '/#Contact'
    return false
  }

  const packagesChangePremium = () => {
    setPackages(2)
    document.location = '/#Contact'
    return false
  }

  const packagesChangeUnlimited = () => {
    setPackages(3)
    document.location = '/#Contact'
    return false
  }

  const ref = React.useRef()
  React.useEffect(() => {
    const observerOffer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('showOffer')
        })
      })

    const hiddenElementsOffer = document.querySelectorAll('.hiddenOffer');
    hiddenElementsOffer.forEach((el) => {
      observerOffer.observe(el)
    })
  }, [ref]
  )


  return (
    <>
      <div className='offer-box' id='Offer'>
        <div className='offer-title hiddenOffer'>Offer</div>
        <div className='offer-offers'>
          <div className='offer-offer1 hiddenOffer' onClick={packagesChangeStandard}>
            <div className='nameOffer'>Standard</div>
            <div className='pricing'>$35</div>
            <div className='list'>
              <div>
                <i className='fa-solid fa-check'></i> Lorem ipsum
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Vestibulum nec
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Nulla sit
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Mauris vitae
              </div>
              <div>
                <i className='fa-solid fa-xmark'></i> Pellentesque cursus
              </div>
              <div>
                <i className='fa-solid fa-xmark'></i> Nullam elementum
              </div>
              <div>
                <i className='fa-solid fa-xmark'></i> Pellentesque eu
              </div>
              <div>
                <i className='fa-solid fa-xmark'></i> Quisque ac
              </div>
            </div>
            <Button
              variant='contained'
              className='button-begin'
              style={{
                backgroundColor: '#f28b3b'
              }}
            >
              Begin
            </Button>
          </div>
          <div className='offer-offer1 hiddenOffer' onClick={packagesChangePremium}>
            <div className='nameOffer'>Premium</div>
            <div className='pricing'>$55</div>
            <div className='list'>
              <div>
                <i className='fa-solid fa-check'></i> Lorem ipsum
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Vestibulum nec
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Nulla sit
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Mauris vitae
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Pellentesque cursus
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Nullam elementum
              </div>
              <div>
                <i className='fa-solid fa-xmark'></i> Pellentesque eu
              </div>
              <div>
                <i className='fa-solid fa-xmark'></i> Quisque ac
              </div>
            </div>
            <Button
              variant='contained'
              className='button-begin'
              style={{
                backgroundColor: '#f28b3b'
              }}
            >
              Begin
            </Button>
          </div>
          <div className='offer-offer1 hiddenOffer' onClick={packagesChangeUnlimited}>
            <div className='nameOffer'>Unlimited</div>
            <div className='pricing'>$75</div>
            <div className='list'>
              <div>
                <i className='fa-solid fa-check'></i> Lorem ipsum
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Vestibulum nec
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Nulla sit
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Mauris vitae
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Pellentesque cursus
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Nullam elementum
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Pellentesque eu
              </div>
              <div>
                <i className='fa-solid fa-check'></i> Quisque ac
              </div>
            </div>
            <Button
              variant='contained'
              className='button-begin'
              style={{
                backgroundColor: '#f28b3b'
              }}
            >
              Begin
            </Button>
          </div>
        </div>
        <div className='offer-arrow hiddenOffer'>
          <a href='#Contact'>
            <i className='fa-solid fa-arrow-down arrow'></i>
          </a>
        </div>
      </div>
      <MainPageContact
        packages={packages}
        setPackages={setPackages}
      ></MainPageContact>
    </>
  )
}

export default MainPageOffer
