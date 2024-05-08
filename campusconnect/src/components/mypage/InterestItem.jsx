import styled from 'styled-components';
import UserIcon from '../../assets/UserIcon.png';

const Wrapper = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 900;
`;

const BoxContainer = styled.div`
  width: 100%;
  height: 13rem;
  border: 1px solid #504e4e;
  border-radius: 5px;
  padding: 5px;
  font-size: 1rem;
  position: relative;
`;

const List = styled.div`
  width: 95%;
  height: 80%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  font-size: 1rem;
`;

const UserImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 30px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #d9d9d9;
`;

const ListTitle = styled.span`
  font-weight: 800;
`;

const TransBtn = styled.div`
  color: #4181ff;
  font-weight: 600;
`;

const DeleteBtn = styled.button`
  border: none;
  width: 7rem;
  height: 1.8rem;
  background-color: #ff5e8e;
  border-radius: 5px;
  color: #fff;

  &: hover {
    cursor: pointer;
  }
`;

function InterestItem({ openInterestListOff }) {
  return (
    <Wrapper>
      <Title>관심 상품</Title>

      <BoxContainer>
        <List>
          <ListItem>
            <TransBtn>[거래 가능]</TransBtn>
            <UserImg src={UserIcon} alt="프로필 사진" />
            <ListTitle>컴퓨터구조 전공교재</ListTitle>
            <div>정보통신공학과 / 이OO</div>

            <DeleteBtn onClick={openInterestListOff} type="button">
              X
            </DeleteBtn>
          </ListItem>
        </List>
      </BoxContainer>
    </Wrapper>
  );
}

export default InterestItem;
