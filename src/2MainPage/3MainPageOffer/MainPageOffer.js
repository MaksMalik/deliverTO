import React, {useState} from 'react'
import './MainPageOffer.css'


function MainPageOffer() {
  const [offer, setOffer] = useState(1)

  return (
    <div className="offer-box" id="Offer">
      <div className="offer-title">Offer</div>
      <div className="offer-buttons">
        <div className="offer-button" onClick={event=> {setOffer(1)}}>Standard</div>
        <div className="offer-button" onClick={event=> {setOffer(2)}}>Premium</div>
        <div className="offer-button" onClick={event=> {setOffer(3)}}>Unlimited</div>
      </div>

      <div className="offer-offers-mobile">
        {(offer === 1)
          ? (<div className="offer-offer-mobile">
              <div>
                <div>
                  <i class="fa-solid fa-check"></i> Lorem ipsum
                </div>
                <div>
                  <i class="fa-solid fa-check"></i> Vestibulum nec
                </div>
                <div>
                  <i class="fa-solid fa-check"></i> Nulla sit
                </div>
                <div>
                  <i class="fa-solid fa-check"></i> Mauris vitae
                </div>
                <div>
                  <i class="fa-solid fa-xmark"></i> Pellentesque cursus
                </div>
                <div>
                  <i class="fa-solid fa-xmark"></i> Nullam elementum
                </div>
                <div>
                  <i class="fa-solid fa-xmark"></i> Pellentesque eu
                </div>
                <div>
                  <i class="fa-solid fa-xmark"></i> Quisque ac
                </div>
              </div>
            </div>)
          : ((offer === 2)
            ? (<div className="offer-offer-mobile">
                <div>
                  <div>
                    <i class="fa-solid fa-check"></i> Lorem ipsum
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Vestibulum nec
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Nulla sit
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Mauris vitae
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Pellentesque cursus
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Nullam elementum
                  </div>
                  <div>
                    <i class="fa-solid fa-xmark"></i> Pellentesque eu
                  </div>
                  <div>
                    <i class="fa-solid fa-xmark"></i> Quisque ac
                  </div>
                </div>
              </div>)
            : (<div className="offer-offer-mobile">
                <div>
                  <div>
                    <i class="fa-solid fa-check"></i> Lorem ipsum
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Vestibulum nec
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Nulla sit
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Mauris vitae
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Pellentesque cursus
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Nullam elementum
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Pellentesque eu
                  </div>
                  <div>
                    <i class="fa-solid fa-check"></i> Quisque ac
                  </div>
                </div>
              </div>))
        }
      </div>

      <div className="offer-offers">
        <div className="offer-offer1">
          <div className="nameOffer">STANDARD</div>
          <div>
            <div>
              <i class="fa-solid fa-check"></i> Lorem ipsum
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Vestibulum nec
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Nulla sit
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Mauris vitae
            </div>
            <div>
              <i class="fa-solid fa-xmark"></i> Pellentesque cursus
            </div>
            <div>
              <i class="fa-solid fa-xmark"></i> Nullam elementum
            </div>
            <div>
              <i class="fa-solid fa-xmark"></i> Pellentesque eu
            </div>
            <div>
              <i class="fa-solid fa-xmark"></i> Quisque ac
            </div>
          </div>
        </div>
        <div className="offer-offer1">
          <div className="nameOffer">PREMIUM</div>
          <div>
            <div>
              <i class="fa-solid fa-check"></i> Lorem ipsum
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Vestibulum nec
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Nulla sit
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Mauris vitae
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Pellentesque cursus
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Nullam elementum
            </div>
            <div>
              <i class="fa-solid fa-xmark"></i> Pellentesque eu
            </div>
            <div>
              <i class="fa-solid fa-xmark"></i> Quisque ac
            </div>
          </div>
        </div>
        <div className="offer-offer1">
          <div className="nameOffer">UNLIMITED</div>
          <div>
            <div>
              <i class="fa-solid fa-check"></i> Lorem ipsum
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Vestibulum nec
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Nulla sit
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Mauris vitae
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Pellentesque cursus
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Nullam elementum
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Pellentesque eu
            </div>
            <div>
              <i class="fa-solid fa-check"></i> Quisque ac
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
  )
}

export default MainPageOffer