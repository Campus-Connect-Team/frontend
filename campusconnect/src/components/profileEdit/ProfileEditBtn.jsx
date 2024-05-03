import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProfileEditBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/editmypagecomplete');
  };

  return (
    <StyledWrapper onClick={handleClick}>
      <div>프로필 수정</div>
    </StyledWrapper>
  );
};

export default ProfileEditBtn;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  cursor: pointer;
  
  > div {
    background-color: #5b7eef;
    padding: 8px 35px;
    color: #fff;
    border-radius: 6px;
    display: inline-flex;
  }
`;