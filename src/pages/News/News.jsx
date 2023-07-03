import React from "react";
import news1 from "../../media/News/news1.jpg";
import { ImFacebook, ImLinkedin, ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import newsAuthor from "../../media/News/news-author.jpg";
import newsimg from "../../media/News/news4.jpg";
import "./News.scss";
import NewsData from "../../Data/NewsData";
import { Link, NavLink } from "react-router-dom";
const News = () => {
  return (
    <div className="container-fluid news">
      <div className="container filler d-flex flex-column align-items-center gap-5">
        <div className="container">
          <h2>
            The Latest news. <span>From the Ciseco blog</span>
          </h2>
          <div className="news-section pt-5 d-flex w-100 flex-wrap">
            <div className="news1 w-50">
              <div className="news-img">
                <Link to="/blog">
                
                <img src={news1} alt="blog-img"  className="w-100"/>
                </Link>
                <div className="social-media d-flex flex-column gap-3">
                  <span>
                    <ImFacebook />
                  </span>
                  <span>
                    <ImTwitter />
                  </span>
                  <span>
                    <ImLinkedin />
                  </span>
                  <span>
                    <AiFillInstagram />
                  </span>
                </div>
              </div>
              <div className="news1-details">
                <h4>
                  Natoque Penatibus Et Magnis Dis Parturient Montes Nascetur
                  Ridiculus Mus
                </h4>
                <small>
                  Do ut irure incididunt commodo occaecat amet excepteur.
                  Officia est amet pariatur commodo culpa irure incididunt
                  consectetur non enim consequat pariatur pariatur. Eu elit
                  fugiat deserunt officia fugiat nulla fugiat. Irure aliqua qui
                  nisi fugiat elit tempor velit.
                </small>
                <div className="news-author d-flex gap-3 align-items-center">
                  <img src={newsAuthor} alt="" />
                  <strong className="author-name font-weight-bold">
                    Anyone
                  </strong>
                  <span className="date">Jan 10, 2022</span>
                </div>
              </div>
            </div>
            <div className="second-news-section  w-50">
              {NewsData.map((item, index) => {
                return (
                  <div className="news2 pb-4">
                    <div className="news2flexer d-flex align-items-center">
                      <div className="news2-details">
                        <h5>{item.heading}</h5>
                        <small>{item.details}</small>
                        <div className="news-author d-flex gap-2 align-items-center">
                          <img src={item.newsauthor} alt="" />
                          <strong className="author-name font-weight-bold">
                            {item.authorname}
                          </strong>
                          <span className="date">Jan 12, 2022</span>
                        </div>
                      </div>
                      <div className="news2-img ">
                        <img src={item.newsimg} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="btn show-all">
          <Link to="/blog">Show All BLog Articles</Link>      
        </div>
      </div>
    </div>
  );
};

export default News;
