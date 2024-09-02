//팀원 모집 글 작성하는 폼

import React, { useState } from 'react';
import '../App.css';
import Membertype from './membertype';

function Maketeam(){
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    return(
        <div className='maketeam'>
            <div id="make-content-wrapper" className="make-container">
                <div className="make-main-title">팀원 모집하기 👨‍💻</div>
                <div className="line"></div>
            </div>

            <div className="membertypes">
                <Membertype />
            </div>

            <div className="makecontainer">
                <form>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="projectTitle" 
                            name="projectTitle" 
                            placeholder="제목"
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <textarea 
                            id="projectexplain" 
                            name="projectexplain" 
                            placeholder="프로젝트 소개"
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                            rows="8" 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className='upload'>등록하기</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Maketeam;

