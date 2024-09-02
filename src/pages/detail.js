//각 박스를 클릭 시 자세한 공고글을 볼 수있도록 하는 페이지 디자인

import React from "react";
import '../App.css';

function Detail() {
    return(
        <div className="Detail">
            <div id="detail-content-wrapper" className="detail-container">
                <div className="detail-main-title">프로젝트 이름 💻</div>
                <div className="line"></div>
            </div>

            <div className="detail-box">
                <div className="Box">제목</div>
            </div>

            <div className="detail-box">
                <div className="Box">관련 포지션</div>
            </div>

            <div className="detail-box">
                <div className="Box2">자세한 내용</div>
            </div>

            <div className="detail-box">
                <div className="Box">댓글</div>
            </div>

        </div>
    )
};

export default Detail;
