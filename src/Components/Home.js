import React from 'react';
import '../CSS/home.css';
const breadCrum = [
  {
    header: 'Home',
    footer: 'About us',
  },
  {
    header: 'Data explorer',
    footer: 'Contact us',
  },
  {
    header: 'Report & Resources',
    footer: 'Terms & condition',
  },
  {
    header: 'Do you know gen Z?',
    footer: 'Privacy policy',
  },
];

const sideBar = [
  { sideBarContent: 'content' },
  { sideBarContent: 'content' },
  { sideBarContent: 'content' },
  { sideBarContent: 'content' },
  { sideBarContent: 'content' },
  { sideBarContent: 'content' },
  { sideBarContent: 'content' },
  { sideBarContent: 'content' },
];

const Home = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="header">
          {breadCrum.map((data) => {
            return <span className="header-text">{data.header}</span>;
          })}
          <button className="share-btn">
            <span className="share-text">Share</span>
          </button>
        </div>
        <div className="middle-container">
          <div className="side-bar">
            {sideBar.map((data) => {
              return (
                <span className="side-bar-content">{data.sideBarContent}</span>
              );
            })}
          </div>
          <div className="center-content">
            <div className="top-content">Content</div>
            <div className="middle">
              <div className="middle-content1">Content</div>
              <div className="middle-content2">Content</div>
              <div className="middle-content3">Content</div>
            </div>
            <div className="bottom-content">Content</div>
          </div>
        </div>
        <div className="footer">
          {breadCrum.map((data) => {
            return <span className="footer-text">{data.footer}</span>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
