import React from 'react';
import styled from 'styled-components';

const SellerWrapper = ({ boardData }) => {
  console.log(boardData);
  return (
    <StyledWrapper>
      <div className="seller-title">판매자 정보</div>
      <div className="seller-info">
        <img src={boardData.image ? boardData.image : '/default.png'}/>
        <div>
          <div className="name">{boardData.department} {boardData.name}</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default SellerWrapper;

const StyledWrapper = styled.div`
  margin-top: 50px;
  margin-left: 80px;

  .seller-title {
    margin-bottom: 10px;
    color: gray;
  }

  .seller-info {
    display: flex;
    align-items: center;

    .name {
      margin-bottom: 3px;
    }

    .info {
      font-size: 14px;
      color: #007aff;
    }

    > img {
      border-radius: 100%;
      width: 45px;
      height: 45px;
      margin-right: 10px;
    }
  }
`;
