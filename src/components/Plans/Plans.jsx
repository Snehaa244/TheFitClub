import React from 'react';
import './Plans.css';
import plansData from '../../data/plansData';
import tick from '../../assets/whiteTick.png';

// Import icons directly
import { FaCrown, FaFire, FaDumbbell } from 'react-icons/fa';

const Plans = () => {
  // Icon list manually mapped to order
  const icons = [<FaCrown />, <FaFire />, <FaDumbbell />];

  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      <div className="programs-header" style={{ gap: '2rem' }}>
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">now with us</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            <div className="icon">{icons[i]}</div>
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, j) => (
                <div className="feature" key={j}>
                  <img src={tick} alt="tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits →</span>
            </div>

            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
