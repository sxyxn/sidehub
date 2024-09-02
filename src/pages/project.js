import React, { useState } from "react";
import '../App.css';
import Position from './position';
import EmptyStar from '../img/star.png';
import FullStar from '../img/fullstar.png';

function Project() {
  // 예시로 8개의 아이템을 가정
  const [bookmarks, setBookmarks] = useState(Array(9).fill(false));

  // 북마크를 토글하는 함수
  const toggleBookmark = (index) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks[index] = !updatedBookmarks[index];
    setBookmarks(updatedBookmarks);
  };

  const Box = ({ title, position, deadline, index }) => {
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
        </div>
        <div className="box-position">{position}</div>
        <div className="box-deadline">{deadline}</div>
      </div>
    );
  };

  return (
    <div>
      <div className='now'>
        <div id="now-content-wrapper" className="now-container">
          <div className="popular-main-title">현재 구인 프로젝트 🙌</div>
          <div className="line"></div>
        </div>

        <div className='choose'>
          <Position />
        </div>

        <div id="now-content-box" className="now-box">
          {bookmarks.map((_, index) => (
            <Box
              key={index}
              index={index}
              title="제목"
              position="포지션"
              deadline="마감일"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
