import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryListingPage = () => {
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // cn = category news
  const cn = useSelector((state) => state.news[category]);
  console.log(category);

  return (
    <div className="category-page">
      <div className="main-news-container">
        {cn?.length > 0 && (
          <Link
            className="link-to-article"
            to={`/details/${cn[0]?.title}`}
            state={{ article: cn[0] }}
          >
            <div className="img-container">
              <img src={cn[0]?.urlToImage} />
            </div>
            <div className="text-container">
              <h2>{cn[0]?.title}</h2>
              <p>{cn[0]?.description}</p>
            </div>
          </Link>
        )}
      </div>
      <div className="all-news">
        {cn?.slice(1)?.map((article, index) => {
          return (
            <div className="news" key={index}>
              <Link
                className="link-to-article"
                to={`/details/${article?.title}`}
                state={{ article }}
              >
                <div className="img-container">
                  <img src={article?.urlToImage} />
                </div>
                <h3 className="news-heading">{article?.title}</h3>
                <p className="news-content">{article?.description}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryListingPage;
