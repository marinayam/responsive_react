import React from 'react';
import logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="travel__footer section__padding">
    <div className="travel__footer-heading">
      <h1 className="gradient__text">世界の魅力をあなたに。旅の感動を共有しましょう</h1>
    </div>

    <div className="travel__footer-btn">
      <p>新規登録で入会特典配布中</p>
    </div>

    <div className="travel__footer-links">
      <div className="travel__footer-links_logo">
        <img src={logo} alt="travel_logo" />
        <p>東京都東京区東京111 <br /> All Rights Reserved</p>
      </div>
      <div className="travel__footer-links_div">
        <h4>企業情報</h4>
        <p>お知らせ</p>
        <p>採用情報</p>
        <p>お問い合わせ</p>
      </div>
      <div className="travel__footer-links_div">
        <h4>サイト案内</h4>
        <p>標識・約款 </p>
        <p>個人情報保護方針</p>
        <p>よくある質問</p>
      </div>
      <div className="travel__footer-links_div">
        <h4>お問い合わせ</h4>
        <p>東京都東京区東京111</p>
        <p>000-0000-0000</p>
        <p>info@email_sample.net</p>
      </div>
    </div>

    <div className="travel__footer-copyright">
      <p>@2023 mTravel All rights reserved.</p>
    </div>
  </div>
);

export default Footer;