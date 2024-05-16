import React from 'react';
import { personalInfo } from '../assets/data';

const Info = () => {
  return (
    <div className='info-container'>
      <div className='info-column'>
        
        <ul className='info__list'>
          {personalInfo.slice(0, personalInfo.length / 2).map(({ title, description }, index) => {
            return (
              <li className='info__item' key={index}>
                <span className='info__title'>{title}</span>
                <span className='info__description'>{description}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='info-column'>
      
        <ul className='info__list'>
          {personalInfo.slice(personalInfo.length / 2).map(({ title, description }, index) => {
            return (
              <li className='info__item' key={index}>
                <span className='info__title'>{title}</span>
                <span className='info__description'>{description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Info;
