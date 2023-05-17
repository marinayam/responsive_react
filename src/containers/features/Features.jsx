import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'フライト予約',
    text: '世界中の航空会社のフライトスケジュールや料金を比較し、簡単に予約することができます。出発地や目的地などの情報を入力して、最適なフライトオプションを見つけることができます。',
  },
  {
    title: '宿泊施設予約',
    text: 'ホテル、リゾート、民宿、ゲストハウスなどの幅広い宿泊施設の情報を提供しています。目的地や日程、予算に合わせて、宿泊施設を検索し、予約することができます。',
  },
  {
    title: 'パッケージツアー',
    text: '航空券と宿泊施設、さらには現地の観光やアクティビティなどをセットにしたパッケージツアーを提供しています。旅行プランや手続きを一括で行うことができます。',
  },
  {
    title: '観光情報とガイド',
    text: '目的地の観光スポットや名所、地域の文化や食事、現地の交通手段や習慣などの情報を提供しています。現地のガイドブックやレビューも参考にしながら、旅行プランを立てることができます。',
  },
];

const Features = () => (
  <div className="travel__features section__padding" id="features">
    <div className="travel__features-heading">
      <h1 className="gradient__text">旅行の扉を開けよう。忘れられない旅の思い出を作るために、私たちがサポートします。</h1>
      <p>新規登録で入会特典配布中</p>
    </div>
    <div className="travel__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;