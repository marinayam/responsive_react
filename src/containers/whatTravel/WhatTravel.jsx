import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatTravel.css';

const WhatTravel = () => (
  <div className="travel__whattravel section__margin" id="wtravel">
    <div className="travel__whattravel-feature">
      <Feature title="About us" text="あなたの冒険心を刺激する場所です。最新の旅行情報やお得なプランを提供し、あなたの旅をユニークで思い出に残るものにします。美しいビーチや絶景の山々、おいしい料理や新しい友人との出会い、それが旅行の醍醐味です。一緒に素晴らしい思い出を作りましょう！" />
    </div>
    <div className="travel__whattravel-heading">
      <h1 className="gradient__text">魅力的な旅行の世界へようこそ</h1>
      <p>思い出に残る旅を共に</p>
    </div>
    <div className="travel__whattravel-container">
      <Feature title="幅広い情報の提供" text="多くのツアー、ホテル、航空券などの情報を簡単に探せます。さまざまなオプションを比較し、自分に最適なプランを見つけることができます。" />
      <Feature title="便利な予約手続き" text="オンラインで簡単に予約手続きができます。目的地や日程、予算に合わせて航空券や宿泊施設を選び、リアルタイムで確認・予約ができます。" />
      <Feature title="お得なプラン" text="割引や特別プロモーションなどのお得な情報を提供します。旅行会社や航空会社との提携により、通常よりもお得な価格や特典をご案内します。" />
    </div>
  </div>
);

export default WhatTravel;