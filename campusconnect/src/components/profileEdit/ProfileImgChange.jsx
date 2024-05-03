import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileImgChange = () => {
  const [imageSrc, setImageSrc] = useState('/default.png'); // State to store the image source

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <StyledWrapper>
      <div className="profile-title">프로필 이미지</div>
      <div className="profile-img">
        <img src={imageSrc} alt="Profile" />
        <div className="profile-img-warning">.jpg 또는 .png 계열 이미지만 업로드해 주세요.</div>
      </div>
      <label className="profile-change-btn">
        사진 변경
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
          style={{ display: 'none' }} // Hide the actual file input element
        />
      </label>
    </StyledWrapper>
  );
};

export default ProfileImgChange;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  .profile-title {
    color: #9a9a9a;
  }

  .profile-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      margin-bottom: 10px;
    }

    .profile-img-warning {
      font-size: 14px;
      color: red;
      font-weight: 600;
    }
  }

  .profile-change-btn {
    background-color: #5b7eef;
    padding: 8px 35px;
    color: #fff;
    border-radius: 6px;
    cursor: pointer; 
    position: relative; 
  }
`;
