import React from 'react';
import {Article} from '../../components/';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="travel__blog section__padding" id="blog">
    <div className="travel__blog-heading">
      <h1 className="gradient__text">世界の美しさと魅力 <br /> 写真と共にお届け</h1>
    </div>
    <div className="travel__blog-container">
      <div className="travel__blog-container_groupA">
        <Article imgUrl={blog01} date="2023/05/17" text="世界の絶景トップ10：驚きと感動を呼ぶ美しい場所" />
      </div>
      <div className="travel__blog-container_groupB">
        <Article imgUrl={blog02} date="2023/05/18" text="山岳の絶景：壮大な山々とその美しさに酔いしれて" />
        <Article imgUrl={blog03} date="2023/05/19" text="海と空の融合：絶景の海岸線と美しいサンセット" />
        <Article imgUrl={blog04} date="2023/05/20" text="秘境の楽園：人知れずに広がる隠れた絶景スポット" />
        <Article imgUrl={blog05} date="2023/05/21" text="絶景ハイキング：素晴らしい景色と共に歩く冒険の旅" />
      </div>
    </div>
  </div>
);

export default Blog;