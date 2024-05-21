import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../img/pt1.png';
import Photo2 from '../img/pt2.png';
import Position from './position';

function Main() {
  return (
    <div className="App"> 

      {/* content wrapper start */}
      <div id="content-wrapper" className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Carousel className="carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Photo1}
                  alt="first slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Photo2}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div> 
        
        {/* welcome content start */}
        <div id="welcome-content-wrapper" className="content-wrapper">
          <div className="content_box">
            <div className="content-main-title">우리들의 프로젝트 중심지, SideHub</div>
            <div className="content-main-desc">대학생을 위한 커뮤니티 기반 프로젝트 플랫폼</div>
          </div>
        </div>

        {/* 올해 인기 프로젝트 start  */}
        <div className='popular'>
          <div id="popular-content-wrapper" className="popular-container">
            <div className="popular-main-title">올해 인기 프로젝트 🔥</div>
            <div className="line"></div>
          </div>

          <div id = "popular-content-box" className="popular-box">
            <div className="box">Box 1</div>
            <div className="box">Box 2</div>
            <div className="box">Box 3</div>
          </div>
        </div>

        {/* 현재 구인 프로젝트 start  */}
        <div className='now'>
          <div id="now-content-wrapper" className="now-container">
            <div className="popular-main-title">현재 구인 프로젝트 🙌</div>
            <div className="line"></div>
          </div>

          <div className='choose'>
            <Position />
          </div>

          <div id = "now-content-box" className="now-box">
            <div className="box">Box 1</div>
            <div className="box">Box 2</div>
            <div className="box">Box 3</div>
            <div className="box">Box 4</div>
            <div className="box">Box 5</div>
            <div className="box">Box 6</div>
          </div>
          <button id="more-button">
            <Link to="/project">더보기</Link>
          </button>

        </div>

      </div>
      {/* content wrapper end */}

      {/* Footer start */}
      <footer id="footer" className="footer" style={{ backgroundColor: 'lightgrey' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 text-left">
              <Link to="/company" className="footer-link">회사 소개</Link> |
              <Link to="/service" className="footer-link"> 서비스 소개</Link> |
              <Link to="/advertisement" className="footer-link"> 광고 및 제휴</Link>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-5 text-left">
              <Link to="/privacy-policy" className="footer-link">개인정보처리방침</Link> |
              <Link to="/terms-of-service" className="footer-link"> 이용약관</Link> |
              <Link to="/help" className="footer-link"> 도움말</Link> |
              <Link to="/notice" className="footer-link"> 공지사항</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Main;
