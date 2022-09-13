import React, {useState} from 'react'
import './MainPageOffer.css'
import MainPageContact from '../4MainPageContact/MainPageContact'


function MainPageOffer() {
  const [packages, setPackages] = useState(1)

  const packagesChangeStandard = () => {
    setPackages(1)
    document.location='/#Contact';return false;
  }

  const packagesChangePremium = () => {
    setPackages(2)
    document.location='/#Contact';return false;
  }

  const packagesChangeUnlimited = () => {
    setPackages(3)
    document.location='/#Contact';return false;
  }

  return (
    <>
      <div className="offer-box" id="Offer">
        <div className="offer-title">Offer</div>
        <div className="offer-offers">
          <div className="offer-offer1" onClick={packagesChangeStandard}>
          <div className="nameOffer">STANDARD</div>
          <div>
            <div>
              <i className="fa-solid fa-check"></i> Lorem ipsum
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Vestibulum nec
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Nulla sit
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Mauris vitae
            </div>
            <div>
              <i className="fa-solid fa-xmark"></i> Pellentesque cursus
            </div>
            <div>
              <i className="fa-solid fa-xmark"></i> Nullam elementum
            </div>
            <div>
              <i className="fa-solid fa-xmark"></i> Pellentesque eu
            </div>
            <div>
              <i className="fa-solid fa-xmark"></i> Quisque ac
            </div>
          </div>
          </div>
          <div className="offer-offer1" onClick={packagesChangePremium}>
          <div className="nameOffer">PREMIUM</div>
          <div>
            <div>
              <i className="fa-solid fa-check"></i> Lorem ipsum
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Vestibulum nec
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Nulla sit
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Mauris vitae
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Pellentesque cursus
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Nullam elementum
            </div>
            <div>
              <i className="fa-solid fa-xmark"></i> Pellentesque eu
            </div>
            <div>
              <i className="fa-solid fa-xmark"></i> Quisque ac
            </div>
          </div>
          </div>
          <div className="offer-offer1" onClick={packagesChangeUnlimited}>
          <div className="nameOffer">UNLIMITED</div>
          <div>
            <div>
              <i className="fa-solid fa-check"></i> Lorem ipsum
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Vestibulum nec
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Nulla sit
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Mauris vitae
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Pellentesque cursus
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Nullam elementum
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Pellentesque eu
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Quisque ac
            </div>
          </div>
          </div>
        </div>
        <div className="offer-arrow">
          <a href="#Contact">
            <i className="fa-solid fa-arrow-down arrow"></i>
          </a>
        </div>
      </div>
      <MainPageContact packages={packages} setPackages={setPackages}> </MainPageContact>
    </>
  )
}

export default MainPageOffer