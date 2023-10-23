import React from "react";
import { Link } from "react-router-dom";

const GridOneForThree = (props) => {
  return (
    props?.data?.length > 0 && (
      <div className="grid-one-for-three-bg">
        <div className="grid-one-for-three">
          <h1 className="heading">{props?.heading}</h1>
          <div className="all-news">
            {props?.data?.slice(0, 1).map((article, index) => {
              return (
                <div className="main-news" key={index}>
                  <Link
                    className="link-to-article"
                    to={`/details/${article.title}`}
                    state={{ article }}
                  >
                    <div className="img-container">
                      <img src={article.urlToImage} />
                    </div>
                    <div className="content">
                      <h2 className="news-heading">{article?.title}</h2>
                      <p className="news-content">{article?.description}</p>
                    </div>
                  </Link>
                </div>
              );
            })}

            <div className="additional-news">
              {props?.data?.slice(1, 4).map((article, index) => {
                return (
                  <div className="news" key={index}>
                    <Link
                      className="link-to-article"
                      to={`/details/${article.title}`}
                      state={{ article }}
                    >
                      <img src={article?.urlToImage} />
                      <h3 className="news-heading">{article?.title}</h3>
                      <p className="news-content">{article?.description}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default GridOneForThree;
