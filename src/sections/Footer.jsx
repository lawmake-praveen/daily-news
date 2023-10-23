import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { dailyNews } from "../assets/exportImage";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <h1 className="heading">Explore Daily News</h1>
        <ul className="category-div">
          <Link to="/category/india" className="link-router">
            <li>India</li>
          </Link>
          <Link to="/category/sports" className="link-router">
            <li>Sports</li>
          </Link>
          <Link to="/category/politics" className="link-router">
            <li>Politics</li>
          </Link>
          <Link to="/category/business" className="link-router">
            <li>Business</li>
          </Link>
          <Link to="/category/fashion" className="link-router">
            <li>Fashion</li>
          </Link>
          <Link to="/category/shareMarket" className="link-router">
            <li>Market</li>
          </Link>
          <Link to="/category/travel" className="link-router">
            <li>Travel</li>
          </Link>
          <Link to="/category/culture" className="link-router">
            <li>Culture</li>
          </Link>
          <Link to="/category/weather" className="link-router">
            <li>Weather</li>
          </Link>
        </ul>
        <hr />
        <h3 className="my-intro">
          This Website was Created by{" "}
          <Link
            target="_blank"
            to="https://lawmake.vercel.app/"
            className="link-to-portfolio"
          >
            &nbsp;Lawmake Praveen&nbsp;
          </Link>
        </h3>
        <hr />
        <ul className="social-links">
          <h2 className="news-heading">Contact Me On</h2>
          <Link
            className="link-router"
            target="_blank"
            to="https://www.linkedin.com/in/lawmake-praveen-928a15239/"
          >
            <span>
              <BsLinkedin />
            </span>
          </Link>
          <Link
            className="link-router"
            target="_blank"
            to="https://github.com/lawmake-praveen"
          >
            <span>
              <BsGithub />
            </span>
          </Link>
          <Link
            className="link-router"
            target="_blank"
            to="https://wa.me/6381376043"
          >
            <span>
              <BsWhatsapp />
            </span>
          </Link>
        </ul>
        <hr />

        <div className="copyright-div">
          <span>Copyright © 2023 Daily News</span>. The Daily News is not
          responsible for the content of external sites.
        </div>
      </div>
      <div className="right-footer">
        <img src={dailyNews} />
      </div>
    </div>
  );
};

export default Footer;
