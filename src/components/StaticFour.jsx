import React from "react";
import { Link } from "react-router-dom";

const StaticFour = (props) => {
  return (
    props?.data?.length > 0 && (
      <div className="static-four">
        <h1 className="heading">{props?.heading}</h1>
        <div className="all-news">
          {props?.data?.slice(0, 4).map((article, index) => {
            return (
              <div className="news" key={index}>
                <Link
                  className="link-to-article"
                  to={`/details/${article.title}`}
                  state={{ article }}
                >
                  <div className="img-container">
                    <img src={article?.urlToImage} />
                  </div>
                  <div className="text">
                    <p className="news-heading">{article?.title}</p>
                    <p className="news-content">{article?.description}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default StaticFour;
