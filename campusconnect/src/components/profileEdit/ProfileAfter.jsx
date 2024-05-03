import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileAfter = () => {
  const [college, setCollege] = useState('IT공과대학');
  const [department, setDepartment] = useState('정보통신공학과');
  const [name, setName] = useState('김OO');

  return (
    <StyledWrapper>
      <div className="after-title">수정 후 프로필</div>
      <div className="after-first-section">
        <div className="label-wrapper">
          <div className="title-label">단과대학</div>
          <input
            className="edit-input"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
        </div>
        <div className="label-wrapper">
          <div className="title-label">학번</div>
          <div>20210901</div>
        </div>
      </div>
      <div className="after-second-section">
        <div className="label-wrapper">
          <div className="title-label">소속 학과(학부)</div>
          <input
            className="edit-input"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div className="label-wrapper">
          <div className="title-label">이름</div>
          <input
            className="edit-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ProfileAfter;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .after-first-section {
    padding: 0 115px 0 55px;
  }

  .after-first-section, .after-second-section {

    .label-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 20px;
      //width: 100%;
      width: 320px;

      .title-label {
        color: #9a9a9a;
        width: 120px;
        padding: 0 15px;
        text-align: end;
      }

      .edit-input {
        flex: 1;
        height: 30px;
        width: 150px;
        border: 1px solid black;
        border-radius: 6px;
        padding: 0 8px;
      }
    }
  }

  .profile-edit-btn {
    > div {
      background-color: #5b7eef;
      padding: 8px 35px;
      color: #fff;
      border-radius: 6px;
    }
  }
`;
