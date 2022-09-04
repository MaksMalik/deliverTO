import React, {useState} from 'react'
import './MainPageOffer.css'


function MainPageOffer() {
  const [offer, setOffer] = useState(1)

  return (
    <div className="offer-box" id="Offer">
      <div className="offer-title">Prices</div>
      <div className="offer-buttons">
        <div className="offer-button" onClick={event=> {setOffer(1)}}>Standard</div>
        <div className="offer-button" onClick={event=> {setOffer(2)}}>Premium</div>
        <div className="offer-button" onClick={event=> {setOffer(3)}}>Unlimited</div>
      </div>

      <div className="offer-offers-mobile">
        {(offer === 1)
        ? (<div className="offer-offer-mobile">1</div>)
        : (offer === 2) ? (<div className="offer-offer-mobile">2</div>) : (<div className="offer-offer-mobile">KUPKA Z DUPKA xD</div>)
        }
      </div>

      <div className="offer-offers">
        <div className="offer-offer1"></div>
        <div className="offer-offer2"></div>
        <div className="offer-offer3"></div>
      </div>
    </div>
  )
}

export default MainPageOffer