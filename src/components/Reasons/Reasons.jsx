import React from 'react'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
import './Reasons.css'

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="img1" />
        <img src={image2} alt="img2" />
        <img src={image3} alt="img3" />
        <img src={image4} alt="img4" />
      </div>

      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="tick" />
            <span>over 140+ expert coaches</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 free program for new members</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>reliable partners</span>
          </div>
        </div>

        <span className="gray-text">OUR PARTNERS</span>
        <div className="partners">
          <img src={nb} alt="New Balance" />
          <img src={adidas} alt="Adidas" />
          <img src={nike} alt="Nike" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
