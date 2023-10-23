import React from "react";
import Header from "./sections/Header";
import HomePage from "./pages/homepage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/Search";
import NewsDetailsPage from "./pages/NewsDetailsPage";
import CategoryListingPage from "./pages/CategoryListingPage";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:details" element={<NewsDetailsPage />} />
          <Route path="/category/:category" element={<CategoryListingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
