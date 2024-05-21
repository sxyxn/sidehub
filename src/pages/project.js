import React from "react";
// import { Link } from 'react-router-dom';
import '../App.css';
import Position from './position';

function Project() {
    
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

            <div id = "now-content-box" className="now-box">
              <div className="box">Box 1</div>
              <div className="box">Box 2</div>
              <div className="box">Box 3</div>
              <div className="box">Box 4</div>
              <div className="box">Box 5</div>
              <div className="box">Box 6</div>
              <div className="box">Box 7</div>
              <div className="box">Box 8</div>
              <div className="box">Box 9</div>
            </div>

          </div>
        </div>
    );
}

export default Project;