import React from 'react';
import './Blogs.css';  
import Blog1 from "../src/img/blogs1.png";
import Blog2 from "../src/img/blogs2.png";
import Blog3 from "../src/img/blogs3.png";
import Blog4 from "../src/img/blogs4.png";
import Blog5 from "../src/img/blogs5.png";
import Blog6 from "../src/img/blogs6.png";

const articles = [
  {
    id: 1,
    title: "What is the branding, and what we need it?",
    category: "BRANDING",
    image: Blog1,
  },
  {
    id: 2,
    title: "What is the branding, and what we need it?",
    category: "TIKTOK",
    image: Blog2,
  },
  {
    id: 3,
    title: "What is the branding, and what we need it?",
    category: "LOGO DESIGN",
    image: Blog3,
  },
  {
    id: 4,
    title: "What is the branding, and what we need it?",
    category: "FB",
    image: Blog4,
  },
  {
    id: 5,
    title: "What is the branding, and what we need it?",
    category: "AI",
    image: Blog5,
  },
  {
    id: 6,
    title: "What is the branding, and what we need it?",
    category: "NFT",
    image: Blog6,
  }
];

const Blogs = () => {
  return (
    <section className="news-section">
      <div className="section-header">
        <h4>BLOGS</h4>
        <h2>News & Articles</h2>
        <p>Best Articles to get started</p>
      </div>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.category} className="article-image" />
            <div className="article-content">
              <span className="article-category">{article.category}</span>
              <h3>{article.title}</h3>
              <p>On the other hand, we denounce with righteous indignation and...</p>
            </div>
          </div>
        ))}
      </div>
      <button className="load-more-btn">LOAD MORE</button>
    </section>
  );
};

export default Blogs;
