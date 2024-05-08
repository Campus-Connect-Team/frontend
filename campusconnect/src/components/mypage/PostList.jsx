import styled from 'styled-components';

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

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #d9d9d9;
`;

const PosibleText = styled.div`
  color: #4181ff;
  font-weight: 600;
`;

const BtnWrapper = styled.div`
  width: 16rem;
  display: flex;
  justify-content: space-between;
`;

const EditBtn = styled.button`
  border: none;
  width: 7rem;
  height: 1.8rem;
  background-color: #4181ff;
  border-radius: 5px;
  color: #fff;

  &: hover {
    cursor: pointer;
  }
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

function PostList({ openBoardDelete }) {
  return (
    <Wrapper>
      <Title>작성한 게시글</Title>

      <BoxContainer>
        <List>
          <ListItem>
            <PosibleText>[거래 가능]</PosibleText>
            <div>에어팟 프로 2 판매합니다</div>
            <BtnWrapper>
              <EditBtn type="button">수정하기</EditBtn>
              <DeleteBtn onClick={openBoardDelete} type="button">
                삭제하기
              </DeleteBtn>
            </BtnWrapper>
          </ListItem>
        </List>
      </BoxContainer>
    </Wrapper>
  );
}

export default PostList;
