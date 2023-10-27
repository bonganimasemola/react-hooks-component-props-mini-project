import React from "react";
import Header from "./Header";
import About from "./About";
import blogData from "../data/blog";
import Article from "./Article";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About imageSrc={blogData.image} aboutText={blogData.about} />
      <Article />
      <ArticleList />
    </div>
  );
}

export default App;









