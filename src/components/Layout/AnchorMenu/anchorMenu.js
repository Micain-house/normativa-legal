import React from 'react';
import './anchorMenu.css'

const AnchorMenu = ({ articleTitles, setActiveArticleIndex, activeArticleIndex }) => (
  <div className="anchor-menu">
    <ul>
      {articleTitles.map((article, index) => (
        <li key={index} className={activeArticleIndex === index ? 'active' : ''}>
          <a href={`#article-${index}`} onClick={() => setActiveArticleIndex(index)}>
            {article.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default AnchorMenu;
