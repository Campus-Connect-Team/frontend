import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Profile from '../components/mypage/Profile';
import EvalScore from '../components/mypage/EvalScore';
import InterestItem from '../components/mypage/InterestItem';
import ChatList from '../components/mypage/ChatList';
import PostList from '../components/mypage/PostList';
import DeleteAccountBtn from '../components/mypage/DeleteAccountBtn';

const MyPageContainer = styled.div`
  width: 50%;
  margin: 0 auto 5% auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

function MyPage() {
  return (
    <>
      <NavBar />
      <MyPageContainer>
        <h1>마이페이지</h1>
        <Profile />
        <EvalScore />
        <InterestItem />
        <ChatList />
        <PostList />
        <DeleteAccountBtn />
      </MyPageContainer>
    </>
  );
}

export default MyPage;
