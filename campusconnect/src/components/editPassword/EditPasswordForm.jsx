import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPasswordForm = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState(false);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const validatePassword = (password) => {
    const containsSpecialChar = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    return containsSpecialChar.test(password) && password.length >= 8 && password.length <= 20;
  };

  const handleCurrentPasswordChange = (event) => {
    const value = event.target.value;
    setCurrentPassword(value);
    // setIsCurrentPasswordValid(value === '1111aaaa!');
  };

  const handleNewPasswordChange = (event) => {
    const value = event.target.value;
    setNewPassword(value);
    setIsNewPasswordValid(validatePassword(value));
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setIsConfirmPasswordValid(value === newPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentNumber = localStorage.getItem('studentNumber');
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.patch(
        `http://15.165.91.27:8080/users/my-page/password/${String(studentNumber)}`,
        {
          currentPassword,
          editPassword: newPassword,
          checkEditPassword: confirmPassword,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('studentNumber');
        localStorage.removeItem('department');
        localStorage.removeItem('name');
        localStorage.removeItem('userProfileImage');
        navigate('/EditPasswordComplete');
      }
    } catch (error) {
      alert(error.response.data.responseCode);
    }
  };

  return (
    <StyledWrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-wrapper">
          <div className="label">현재 비밀번호</div>
          <input
            type="password"
            placeholder="현재 비밀번호"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
        </div>
        {/*{currentPassword && (isCurrentPasswordValid ? (*/}
        {/*  <div className="collect">현재 비밀번호와 일치합니다.</div>*/}
        {/*) : (*/}
        {/*  <div className="waring">현재 비밀번호가 일치하지 않습니다.</div>*/}
        {/*))}*/}
        <div className="input-wrapper">
          <div className="label">변경할 비밀번호</div>
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <div className="pw-warning">특수 문자를 포함하여 8~20글자로 입력해 주세요.</div>
        </div>
        <div className="input-wrapper">
          <div className="label">변경 비밀번호 재확인</div>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        {confirmPassword && (isConfirmPasswordValid ? (
          <div className="collect">변경 비밀번호와 일치합니다.</div>
        ) : (
          <div className="waring">변경 비밀번호와 일치하지 않습니다.</div>
        ))}
      </form>
      <div className="change-btn" onClick={handleSubmit}>
        <span>변경하기</span>
      </div>
    </StyledWrapper>
  );
};

export default EditPasswordForm;

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
      width: 160px;
      margin-right: 20px;
    }

    > div {
      margin-left: 35px;
    }

    .pw-warning {
      color: #007aff;
    }
  }

  .collect {
    color: green;
    padding-left: 220px;
    font-size: 12px;
    margin-bottom: 20px;
    margin-top: -20px;
  }

  .waring {
    color: red;
    padding-left: 220px;
    font-size: 12px;
    margin-bottom: 20px;
    margin-top: -20px;
  }

  .change-btn {
    margin-top: 12px;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    background-color: #5b7eef;
    padding: 10px 35px;
    color: #fff;
    border-radius: 10px;
    font-size: 12px;
    cursor: pointer;
    margin-right: 90px;
  }
`;
