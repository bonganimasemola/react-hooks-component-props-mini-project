import React from 'react';
import blogData from '../data/blog';
import Article from './Article';

function ArticleList() {
  const articles = blogData.posts;

  return (
    <div>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
          
        />
      ))}
    </div>
  );
}

export default ArticleList;


