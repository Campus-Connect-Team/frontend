import styled from 'styled-components';
import UserIcon from '../../assets/UserIcon.png';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2.5rem;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`;

const InfoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InfoDetailTitle = styled.span`
  font-size: 1.2rem;
  margin: 6px 0;
  color: #959494;
`;

const InfoDetailText = styled.span`
  font-size: 1.2rem;
  margin: 6px 0;
`;

const Button = styled.button`
  width: 8rem;
  height: 1.8rem;
  background-color: #4181ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-bottom: 0.7rem;

  &:hover {
    cursor: pointer;
  }
`;

function Profile() {
  return (
    <Wrapper>
      <ImgContainer>
        <ProfileImg src={UserIcon} alt="프로필 이미지" />
      </ImgContainer>
      <InfoContainer>
        <InfoDetailContainer>
          <InfoDetailTitle>단과대학</InfoDetailTitle>
          <InfoDetailTitle>학번</InfoDetailTitle>
          <InfoDetailTitle>이메일</InfoDetailTitle>
        </InfoDetailContainer>
        <InfoDetailContainer>
          <InfoDetailText>IT 공과대학</InfoDetailText>
          <InfoDetailText>20210901</InfoDetailText>
          <InfoDetailText>abc123@sungkyul.ac.kr</InfoDetailText>
        </InfoDetailContainer>
      </InfoContainer>
      <InfoContainer>
        <InfoDetailContainer>
          <InfoDetailTitle>소속 학과(학부)</InfoDetailTitle>
          <InfoDetailTitle>이름</InfoDetailTitle>
        </InfoDetailContainer>
        <InfoDetailContainer>
          <InfoDetailText>정보통신공학과</InfoDetailText>
          <InfoDetailText>김OO</InfoDetailText>
        </InfoDetailContainer>
      </InfoContainer>
      <InfoDetailContainer>
        <Button type="button">프로필 수정</Button>
        <Button type="button">비밀번호 변경</Button>
      </InfoDetailContainer>
    </Wrapper>
  );
}

export default Profile;
