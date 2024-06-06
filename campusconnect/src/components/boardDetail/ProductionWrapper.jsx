import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Modal from '../Modal.jsx';
import ModalChattingDesc from './ModalChattingDesc.jsx';
import ModalLikeDesc from './ModalLikeDesc.jsx';
import axios from 'axios';

const ProductionWrapper = ({ comments, boardData, commentCount }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLikeModalOpen, setLikeModalOpen] = useState(false);
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(boardData.favoriteCount);

  const handleHeartClick = async () => {
    setIsHeartActive(!isHeartActive);
    const accessToken = localStorage.getItem('accessToken');
    const url = `http://15.165.91.27:8080/boards/2/favorite/${isHeartActive ? 'cancel' : 'register'}`;
    try {
      await axios.patch(url, null, {
        headers: {
          Authorization: accessToken
        }
      });
      setFavoriteCount(prev => isHeartActive ? prev - 1 : prev + 1);
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  };


  return (
    <StyledWrapper>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {boardData.boardImages.map((item) => (
          <SwiperSlide key={item}><img src={item} alt="boardImage" /></SwiperSlide>
        ))}
      </Swiper>
      <div className="production-info">
        <div className="production-title">{boardData.title}</div>
        <div className="production-info-box">
          <div className="like-chat-wrapper">
            <div className="like">관심 {favoriteCount}</div>
            <div className="chat">댓글 {comments.length}</div>
          </div>
          <div className="btn-wrapper">
            <div
              className="heart-btn"
              style={{ backgroundColor: boardData.tradeStatus === '거래 가능' ? 'rgb(226 117 194)' : '#dedede' }}
              onClick={() => {
                // handleHeartClick();
                setLikeModalOpen(true);
              }}
            >
              <img src={isHeartActive ? '/heart-active.png' : '/heart.png'} alt="heart" />
            </div>
            <div
              className="production-status"
              style={{ backgroundColor: boardData.tradeStatus === '거래 가능' ? '#007aff' : 'orange' }}
            >
              {boardData.tradeStatus}
            </div>
          </div>
        </div>
        <div className="production-desc">{boardData.content}</div>
        <div className="kakao-id">카카오톡 아이디: wonjun1234</div>
      </div>
      <Modal isOpen={isModalOpen} close={() => setModalOpen(false)}>
        <ModalChattingDesc setModalOpen={setModalOpen} />
      </Modal>
      <Modal isOpen={isLikeModalOpen} close={() => setLikeModalOpen(false)}>
        <ModalLikeDesc
          handleHeartClick={handleHeartClick}
          setLikeModalOpen={setLikeModalOpen}
          isHeartActive={isHeartActive}
          setIsHeartActive={setIsHeartActive}
        />
      </Modal>
    </StyledWrapper>
  );
};

export default ProductionWrapper;

const StyledWrapper = styled.div`
  width: 400px;

  .swiper {
    width: 400px;
    height: 400px;
    margin-top: 50px;
    border: 2px solid gainsboro;
    border-radius: 10px;
  }

  .swiper-slide {
    width: 400px;
    height: 400px;
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .production-info {
    margin-top: 10px;

    .btn-wrapper {
      display: flex;

      .heart-btn {
        background-color: #dedede;
        padding: 6px 10px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        margin-right: 10px;

        > img {
          width: 20px;
          height: 20px;
        }
      }
    }

    .production-title {
      font-weight: bold;
      font-size: 20px;
    }

    .production-info-box {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      align-items: center;

      .like-chat-wrapper {
        display: flex;

        .like {
          margin-right: 30px;
          color: #1a1afa;
        }

        .chat {
          color: #1a1afa;
        }
      }

      .production-status {
        background-color: orange;
        padding: 6px 28px;
        border-radius: 8px;
        color: #fff;
      }
    }

    .production-desc {
      margin-top: 20px;
    }

    .kakao-id {
      margin-top: 10px;
    }

    .option-btn {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      .chat-btn {
        background-color: #909090;
        padding: 6px 30px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
      }
    }
  }
`;
