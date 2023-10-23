import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchByKeyword } from "../redux/NewsSlice";
import { Link } from "react-router-dom";
import { newQuery } from "../redux/NewsSlice";

const SearchPage = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");
  const allNews = useSelector((state) => state.news.query);
  const finalText = useSelector((state) => state.news.inputQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText("");
    dispatch(newQuery(inputText));
    dispatch(fetchByKeyword(inputText));
  };

  return (
    <div className="search-page">
      <h1>Discover News from around the World!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          autoFocus
        />
        <button>
          <span>
            <FaSearch />
          </span>
        </button>
      </form>
      {allNews?.length > 0 && (
        <h2 className="side-search-heading">
          Search Results for "{finalText}"
        </h2>
      )}
      <div className="all-news">
        {allNews?.map((article, index) => {
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

export default SearchPage;
