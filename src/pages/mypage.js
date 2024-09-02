import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function ProfileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [password, setPW] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('profileImage', selectedFile);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('Upload Successful');
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Upload Failed');
    }
  };

  return (
    <div className='change-info'>
        {/* 프로필 업로드 */}
        <div className="profile-upload">
        <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            style={{ display: 'none' }}
        />
        <div
            className="upload-button"
            onClick={() => document.getElementById('file-input').click()}
        >
            {preview ? (
            <img src={preview} alt="Profile Preview" className="profile-image" />
            ) : (
            <span></span>
            )}
        </div>
        {selectedFile && <button id ="upload" onClick={handleUpload}>Upload</button>}
        {uploadStatus && <p>{uploadStatus}</p>}
        </div>
        
        {/* 다른 정보 입력 */}
        <div className='id'>
            <h4 className='Bigtext'>아이디</h4>
            <div className='form-group'>
              <input 
                type="text" 
                id="id" 
                name="id" 
                placeholder="아이디"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
        </div>

        <div className='pw'>
            <h4 className='Bigtext'>현재 비밀번호</h4>
            <div className='form-group'>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPW(e.target.value)}
                required 
              />
            </div>
        </div>

        <div className='interest'>
            <h4 className='Bigtext'>관심분야</h4>
            <div className='form-group'>
              <input 
                type="text" 
                id="interest" 
                name="interest" 
                placeholder="관심분야"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                required 
              />
            </div>
        </div>

        <div className='introduce'>
            <h4 className='Bigtext'>자기소개</h4>
            <div className='form-group'>
              <input 
                type="text" 
                id="introduce" 
                name="introduce" 
                placeholder="자기소개"
                value={introduce}
                onChange={(e) => setIntroduce(e.target.value)}
                required 
              />
            </div>
        </div>

        <div className='save'>
          <button id="save-button">프로필 저장</button>
        </div>

        <div className='delete'>
          <button id="delete-button">회원탈퇴</button>
        </div>

    </div>
  );
}

export default ProfileUpload;
