import React, { useState } from 'react';
import styled from 'styled-components';
import FindPasswordInfo from './FindPasswordInfo.jsx';

const FindPasswordForm = () => {
  const [tempPassword, setTempPassword] = useState('');  
  const [isValidTempPassword, setIsValidTempPassword] = useState(false);
  const [showFindPasswordInfo, setShowFindPasswordInfo] = useState(false);

  const handleTempPasswordChange = (event) => {
    const inputValue = event.target.value;
    setTempPassword(inputValue);
    const isValid = inputValue === '1111aaaa!';  
    setIsValidTempPassword(isValid);
  };

  const handleTempPasswordSubmit = () => {
    setShowFindPasswordInfo(true);
  };

  const handleLoginClick = () => {
    const containsSpecialChar = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

    if (!containsSpecialChar.test(tempPassword) || tempPassword.length < 8 || tempPassword.length > 20) {
      alert('임시 비밀번호는 특수문자 포함 8~20자입니다.');
    } else {
      alert('로그인 완료.');
    }
  }; // 

  return (
    <StyledWrapper>
      <form>
        <div className="input-wrapper">
          <div className="label">학번</div>
          <input placeholder="학번" maxLength={20}/>
        </div>
        <div className="input-wrapper">
          <div className="label">학교 이메일</div>
          <input maxLength={20} />
          <div className="school-mail">@sungkyul.ac.kr</div>
          <div className="mail-submit-btn" onClick={handleTempPasswordSubmit}>
            <span>임시 비밀번호 발송</span>
          </div>
        </div>
        <div className="input-wrapper last">
          <div className="label">임시 비밀번호 입력</div>
          <input placeholder="임시 비밀번호" value={tempPassword} onChange={handleTempPasswordChange}/>
        </div>
        {tempPassword && (isValidTempPassword ? (
          <div className="collect">확인되었습니다.</div>
        ) : (
          <div className="waring">임시 비밀번호를 재확인해 주세요.</div>
        ))} 
      </form>
      <div className="login-btn" onClick={handleLoginClick}>
        <span>로그인</span>
      </div> 
      {showFindPasswordInfo && <FindPasswordInfo />}
    </StyledWrapper>
  );
};

export default FindPasswordForm;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 150px;

  .input-wrapper {
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    width: 100%;

    > input {
      height: 30px;
      width: 200px;
      border-radius: 10px;
      padding: 0 10px;
      border: 1px solid black;
    }

    .label {
      text-align: end;
      width: 140px;
      margin-right: 20px;
    }

    > div {
      margin-left: 10px;
    }

    .school-mail {
      color: #aeaeae;
    }

    .mail-submit-btn {
      background-color: #5b7eef;
      padding: 10px 20px;
      color: #fff;
      border-radius: 10px;
      font-size: 12px;
      cursor: pointer;
    }
  }

  .last {
    margin-bottom: 10px;
  }

  .collect {
    color: green;
    padding-left: 180px;
    font-size: 12px;
    margin-bottom: 20px;
  }

  .waring {
    color: red;
    padding-left: 180px;
    font-size: 12px;
    margin-bottom: 20px;
  }

  .login-btn {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    padding-left: 180px;
    background-color: #5b7eef;
    padding: 10px 35px;
    color: #fff;
    border-radius: 10px;
    font-size: 12px;
    cursor: pointer;
  }
`;
