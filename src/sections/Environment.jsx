import React from "react";
import { Link } from "react-router-dom";

const Environment = (props) => {
  return (
    props?.data?.length > 0 && (
      <div className="environment-bg">
        <div className="environment">
          <div className="header-environment">
            <h1 className="heading">Solutions for a sustainable world</h1>
            <Link to="/category/environment" className="link-to-article">
              <h3>View Solutions ➤</h3>
            </Link>
          </div>
          <div className="all-news">
            {props?.data?.slice(0, 3).map((article, index) => {
              return (
                <div className="news" key={index}>
                  <div className="img-container">
                    <img src={article?.urlToImage} />
                  </div>
                  <div className="text">
                    <p className="news-heading">{article?.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Environment;
