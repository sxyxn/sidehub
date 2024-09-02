import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../img/pt1.png';
import Photo2 from '../img/pt2.png';
import Position from './position';
import EmptyStar from '../img/star.png';
import FullStar from '../img/fullstar.png';

function Main() {
    const [popularBookmarks, setPopularBookmarks] = useState(Array(3).fill(false)); // 인기 프로젝트 북마크 상태
    const [currentBookmarks, setCurrentBookmarks] = useState(Array(6).fill(false)); // 현재 구인 프로젝트 북마크 상태

    const [currentProjects, setCurrentProjects] = useState([
        { title: "프로젝트 1", position: "포지션 1", deadline: "마감일 1" },
        { title: "프로젝트 2", position: "포지션 2", deadline: "마감일 2" },
        { title: "프로젝트 3", position: "포지션 3", deadline: "마감일 3" },
        { title: "프로젝트 4", position: "포지션 4", deadline: "마감일 4" },
        { title: "프로젝트 5", position: "포지션 5", deadline: "마감일 5" },
        { title: "프로젝트 6", position: "포지션 6", deadline: "마감일 6" },
    ]);

    // 북마크를 토글하는 함수 (인기 프로젝트)
    const togglePopularBookmark = (index) => {
        const updatedBookmarks = [...popularBookmarks];
        updatedBookmarks[index] = !updatedBookmarks[index];
        setPopularBookmarks(updatedBookmarks);
    };

    // 북마크를 토글하는 함수 (현재 구인 프로젝트)
    const toggleCurrentBookmark = (index) => {
        const updatedBookmarks = [...currentBookmarks];
        updatedBookmarks[index] = !updatedBookmarks[index];
        setCurrentBookmarks(updatedBookmarks);
    };

    // 프로젝트를 삭제하는 함수
    const removeProject = (index) => {
        const updatedProjects = currentProjects.filter((_, i) => i !== index);
        setCurrentProjects(updatedProjects);

        const updatedBookmarks = [...currentBookmarks];
        updatedBookmarks.splice(index, 1); // 해당 프로젝트에 대한 북마크 상태도 제거
        setCurrentBookmarks(updatedBookmarks);
    };

    // 프로젝트를 추가하는 함수
    const addProject = () => {
        const newProject = {
            title: "새 프로젝트",
            position: "새 포지션",
            deadline: "새 마감일",
        };
        setCurrentProjects([...currentProjects, newProject]);
        setCurrentBookmarks([...currentBookmarks, false]); // 새 프로젝트에 대한 북마크 상태 추가
    };

    const Box = ({ title, position, deadline, index, isCurrent, bookmarks, toggleBookmark }) => {
      return (
          <div className="box">
            <div className="box-header">
              <h2 className="box-title">{title}</h2>
              <img
                src={bookmarks[index] ? FullStar : EmptyStar}
                alt="북마크"
                onClick={() => toggleBookmark(index)}
                className="bookmark-icon"
              />
              {isCurrent && <button onClick={() => removeProject(index)} className="delete-button">X</button>}
            </div>
            <div className="box-position">{position}</div>
            <div className="box-deadline">{deadline}</div>
          </div>
      );
    };

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

            <div id="popular-content-box" className="popular-box">
              {Array.from({ length: 3 }).map((_, index) => (
                <Box
                  key={index}
                  index={index}
                  title="제목"
                  position="포지션"
                  deadline="마감일"
                  isCurrent={false}
                  bookmarks={popularBookmarks}
                  toggleBookmark={togglePopularBookmark}
                />
              ))}
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

            <div id="now-content-box" className="now-box">
              {currentProjects.map((project, index) => (
                <Box
                  key={index}
                  index={index}
                  title={project.title}
                  position={project.position}
                  deadline={project.deadline}
                  isCurrent={true}
                  bookmarks={currentBookmarks}
                  toggleBookmark={toggleCurrentBookmark}
                />
              ))}
            </div>
            <button onClick={addProject}>프로젝트 추가</button>
            <button id="more-button">
              <Link to="/project">더보기</Link>
            </button>
          </div>

        </div>
        {/* content wrapper end */}
        
      </div>
    );
}

export default Main;
