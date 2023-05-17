import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="travel__blog-container_article">
    <div className="travel__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="travel__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>記事の続きを読む</p>
    </div>
  </div>
);

export default Article;