import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NewsDetailsPage = () => {
  const location = useLocation();
  const { article } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-detail-page">
      <div className="img-container">
        <img src={article?.urlToImage} />
      </div>
      <div className="text">
        <h1>{article?.title}</h1>
        <div className="details">
          <p>by {article?.author}</p>
          <p>Date: {article?.publishedAt.slice(0, 10)}</p>
        </div>
        <p className="news-heading">{article?.description}</p>
        <p className="news-heading">{article?.content}</p>
        <div className="link-container">
          <Link className="external-link" to={article?.url} target="_blank">
            Read Full Story From {article?.source.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
