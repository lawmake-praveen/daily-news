import React from "react";
import { Link } from "react-router-dom";

const RowWiseNews = (props) => {
  return (
    <div className="row-wise-news">
      <h1 className="heading">{props.heading}</h1>
      <div className="all-news">
        {props?.data?.slice(0, 3).map((article, index) => {
          return (
            <Link
              key={index}
              className="news link-to-article"
              to={`/details/${article.title}`}
              state={{ article }}
            >
              <img src={article?.urlToImage} />
              <div className="content">
                <h3 className="news-heading">{article?.title}</h3>
                <p className="news-content">{article?.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RowWiseNews;
