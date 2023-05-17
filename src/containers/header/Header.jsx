import React from 'react';
import people from '../../assets/people.png';
import travel from '../../assets/travel.png';
import './header.css';

const Header = () => (
  <div className="travel__header section__padding" id="home">
    <div className="travel__header-content">
      <h1 className="gradient__text">忘れられない旅の思い出を作ろう</h1>
      <p>旅行をもっと楽しく！私たちのサイトは、あなたの冒険心を刺激する場所です。最新の旅行情報やお得なプランを提供し、あなたの旅をユニークで思い出に残るものにします。美しいビーチや絶景の山々、おいしい料理や新しい友人との出会い、それが旅行の醍醐味です。一緒に素晴らしい思い出を作りましょう！</p>

      <div className="travel__header-content__input">
        <input type="email" placeholder="メールアドレス" />
        <button type="button">登録</button>
      </div>

      <div className="travel__header-content__people">
        <img src={people} />
        <p>1人万人以上の方に利用されています</p>
      </div>
    </div>

    <div className="travel__header-image">
      <img src={travel} />
    </div>
  </div>
)
export default Header