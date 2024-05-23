import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Modal from '../Modal.jsx';
import ModalChattingDesc from './ModalChattingDesc.jsx';
import ModalLikeDesc from './ModalLikeDesc.jsx';

const ProductionWrapper = ({ status, comments }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLikeModalOpen, setLikeModalOpen] = useState(false);
  const [isHeartActive, setIsHeartActive] = useState(false);

  // 하트 버튼 클릭 핸들러
  const toggleHeart = () => {
    setIsHeartActive(!isHeartActive);
  };

  return (
    <StyledWrapper>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="/free-1.jpeg" /></SwiperSlide>
        <SwiperSlide><img src="/free-2.jpeg" /></SwiperSlide>
        <SwiperSlide><img src="/free-3.jpeg" /></SwiperSlide>
      </Swiper>
      <div className="production-info">
        <div className="production-title">에어팟 프로2 판매해요~</div>
        <div className="production-info-box">
          <div className="like-chat-wrapper">
            <div className="like">관심 12</div>
            <div className="chat">댓글 {comments.length}</div>
          </div>
          <div className="btn-wrapper">
            <div className="heart-btn"
                 style={{ backgroundColor: status === 'available' ? 'rgb(226 117 194)' : '#dedede' }}
                 onClick={() => {
                   setLikeModalOpen(true);
                   // toggleHeart(); // 하트 버튼 클릭 시 toggleHeart 함수를 호출합니다.
                 }}>
              <img src={isHeartActive ? '/heart-active.png' : '/heart.png'} /> {/* 이미지 경로를 동적으로 변경 */}
            </div>
            <div className="production-status"
                 style={{ backgroundColor: status === 'available' ? '#007aff' : 'orange' }}>
              {status === 'available' ? '거래 가능' : '거래 완료'}
            </div>
          </div>
        </div>
        <div className="production-desc">구입하고 10번도 사용 안한 것 같아요.. 거의 새 제품인데 사용한 일이 더 이상 없어서 판매하려고 해요 채팅주세요!!</div>
        <div className="kakao-id">카카오톡 아이디: wonjun1234</div>
      </div>
      <Modal isOpen={isModalOpen} close={() => setModalOpen(false)}>
        <ModalChattingDesc setModalOpen={setModalOpen} />
      </Modal>
      <Modal isOpen={isLikeModalOpen} close={() => setLikeModalOpen(false)}>
        <ModalLikeDesc setLikeModalOpen={setLikeModalOpen} isHeartActive={isHeartActive}
                       setIsHeartActive={setIsHeartActive} />
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
        
        >img{
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
