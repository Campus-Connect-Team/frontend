import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Search from '../components/board/Search';
import BoardList from '../components/board/BoardList';

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-size: 1.5rem;
  font-weight: 900;
`;

function BoardPage() {
  return (
    <>
      <NavBar />
      <Title>거래 게시판</Title>
      <Search />
      <BoardList />
    </>
  );
}

export default BoardPage;
