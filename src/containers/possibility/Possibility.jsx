import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="travel__possibility section__padding" id="possibility">
    <div className="travel__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="travel__possibility-content">
      <h4>最高の旅のパートナーとなります</h4>
      <h1 className="gradient__text">世界の魅力をあなたに <br /> 旅の感動を共有しましょう</h1>
      <p>私たちはあなたの旅行パートナーであり、あなたの夢を実現するためのサポートをします。手軽に予約し、身軽に旅を楽しんでください。いつでもどこでも、旅行のワクワクを感じましょう。一緒に素晴らしい思い出を作りましょう！</p>
      <h4>新規登録で入会特典配布中</h4>
    </div>
  </div>
);

export default Possibility;