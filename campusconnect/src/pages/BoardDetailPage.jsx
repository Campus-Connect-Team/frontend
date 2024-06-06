import styled from 'styled-components';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import ProductionWrapper from '../components/boardDetail/ProductionWrapper.jsx';
import SellerWrapper from '../components/boardDetail/SellerWrapper.jsx';
import CommentList from '../components/boardDetail/CommentList.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BoardDetailPage() {
  const [comments, setComments] = useState([]);
  const [boardData, setBoardData] = useState();
  const [commentCount, setCommentCount] = useState();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios.get('http://15.165.91.27:8080/boards/2', {
      headers: {
        Authorization: accessToken
      }
    })
      .then(response => {
        setBoardData(response.data);
        setCommentCount(response.data.commentCount);
        setComments(response.data.boardCommentDetailResponses);
      })
      .catch(error => {
        console.error('There was an error fetching the board data!', error);
      });
  }, []);

  if (!boardData) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <NavBar />
      <StyledWrapper>
        <div className="title-wrapper">
          상품 상세
        </div>
        <div className="detail-wrapper">
          <ProductionWrapper comments={comments} boardData={boardData} commentCount={commentCount} />
          <SellerWrapper boardData={boardData} />
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
