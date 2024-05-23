import styled from 'styled-components';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import ProductionWrapper from '../components/boardDetail/ProductionWrapper.jsx';
import SellerWrapper from '../components/boardDetail/SellerWrapper.jsx';
import CommentList from '../components/boardDetail/CommentList.jsx';
import { useState } from 'react';

function BoardDetailPage() {
  const [comments, setComments] = useState([]);
  const status = 'available'; // available, finish

  return (
    <>
      <NavBar />
      <StyledWrapper>
        <div className="title-wrapper">
          상품 상세
        </div>
        <div className="detail-wrapper">
          <ProductionWrapper status={status} comments={comments}  />
          <SellerWrapper status={status} />
        </div>
        <CommentList comments={comments} setComments={setComments} />
      </StyledWrapper>
      <Footer />
    </>
  );
}

export default BoardDetailPage;

const StyledWrapper = styled.div`
  margin-top: 100px;

  .title-wrapper {
    font-size: 32px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid gainsboro;
    margin: 0 270px;
    padding-bottom: 20px;
  }

  .detail-wrapper {
    display: flex;
    justify-content: center;
    padding-left: 260px;
  }
`;
