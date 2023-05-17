import React from 'react';
import { anaa, hiss, jalu, jtbe, jyarann } from './imports.js';
import './brand.css';

const Brand = () => (
  <div className="travel__brand section__padding">
    <div>
      <img src={anaa} />
    </div>
    <div>
      <img src={hiss} />
    </div>
    <div>
      <img src={jalu} />
    </div>
    <div>
      <img src={jtbe} />
    </div>
    <div>
      <img src={jyarann} />
    </div>
  </div>
);

export default Brand;