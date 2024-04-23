import styled from 'styled-components';
import ComplateBtn from './CompleteBtn';
import Airpods from '../../assets/sample/Airpods.png';
import PossibleBtn from './PossibleBtn';

const GridContainer = styled.div`
  width: 70%;
  margin: 3% auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 5개의 동일한 크기의 열 생성 */
  grid-auto-flow: row; /* 요소가 너비를 초과하면 다음 행으로 넘어가도록 설정 */
  gap: 40px 10px;
`;

const GridItems = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImg = styled.img`
  width: 12rem;
  height: 11rem;
  border: 1px solid #000;
  border-radius: 5px;
`;

const MainContent = styled.div`
  font-size: 1.1rem;
  font-weight: 900;
  margin-top: 0.5rem;
`;

const UserContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  font-weight: 700;
`;

const LikeContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  font-size: 0.875rem;
  color: #12348d;
  margin-top: 0.5rem;
`;

const BoardData = {
  Board: [
    {
      title: '에어팟 프로2 판매해요~',
      mainImg: Airpods,
      major: '정보통신공학과',
      name: '김OO',
      like: 12,
      chat: 3,
      sell: false,
    },
    {
      title: '컴퓨터 구조',
      mainImg: Airpods,
      major: '정보통신공학과',
      name: '이OO',
      like: 1,
      chat: 0,
      sell: true,
    },
    {
      title: '자전거',
      mainImg: Airpods,
      major: '체육교육과',
      name: '김OO',
      like: 2,
      chat: 5,
      sell: true,
    },
    {
      title: '아이패드',
      mainImg: Airpods,
      major: '국어국문학과',
      name: '강OO',
      like: 5,
      chat: 8,
      sell: true,
    },
    {
      title: '모든 전공책(1~4학년)',
      mainImg: Airpods,
      major: '산업경영공학과',
      name: '김OO',
      like: 12,
      chat: 3,
      sell: true,
    },
    {
      title: '에어팟 프로2 판매해요~',
      mainImg: Airpods,
      major: '정보통신공학과',
      name: '김OO',
      like: 12,
      chat: 3,
      sell: false,
    },
    {
      title: '컴퓨터 구조',
      mainImg: Airpods,
      major: '정보통신공학과',
      name: '이OO',
      like: 1,
      chat: 0,
      sell: true,
    },
    {
      title: '자전거',
      mainImg: Airpods,
      major: '체육교육과',
      name: '김OO',
      like: 2,
      chat: 5,
      sell: true,
    },
    {
      title: '아이패드',
      mainImg: Airpods,
      major: '국어국문학과',
      name: '강OO',
      like: 5,
      chat: 8,
      sell: true,
    },
    {
      title: '모든 전공책(1~4학년)',
      mainImg: Airpods,
      major: '산업경영공학과',
      name: '김OO',
      like: 12,
      chat: 3,
      sell: true,
    },
    {
      title: '에어팟 프로2 판매해요~',
      mainImg: Airpods,
      major: '정보통신공학과',
      name: '김OO',
      like: 12,
      chat: 3,
      sell: false,
    },
    {
      title: '컴퓨터 구조',
      mainImg: Airpods,
      major: '정보통신공학과',
      name: '이OO',
      like: 1,
      chat: 0,
      sell: true,
    },
    {
      title: '자전거',
      mainImg: Airpods,
      major: '체육교육과',
      name: '김OO',
      like: 2,
      chat: 5,
      sell: true,
    },
    {
      title: '아이패드',
      mainImg: Airpods,
      major: '국어국문학과',
      name: '강OO',
      like: 5,
      chat: 8,
      sell: true,
    },
    {
      title: '모든 전공책(1~4학년)',
      mainImg: Airpods,
      major: '산업경영공학과',
      name: '김OO',
      like: 12,
      chat: 3,
      sell: true,
    },
  ],
};

function BoardList() {
  return (
    <GridContainer>
      {BoardData.Board.map((board, index) => (
        <GridItems key={index}>
          <MainImg src={board.mainImg} alt="에어팟" />
          <MainContent>{board.title}</MainContent>
          <UserContainer>
            <div>프로필</div>
            <UserInfo>
              <span>{board.major}</span>
              <span>{board.name}</span>
            </UserInfo>
          </UserContainer>
          <LikeContainer>
            <span>관심 {board.like}</span>
            <span>채팅 {board.chat}</span>
          </LikeContainer>

          {board.sell ? <PossibleBtn /> : <ComplateBtn />}
        </GridItems>
      ))}
    </GridContainer>
  );
}

export default BoardList;
