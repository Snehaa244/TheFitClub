import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData.jsx'; // updated file name
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      {/* Program Categories */}
      <div className="program-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            <div className="icon">{program.image}</div>
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
