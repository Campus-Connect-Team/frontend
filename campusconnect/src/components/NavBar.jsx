import styled from 'styled-components';
import Logo from '../assets/Logo.png';

const NavigationBar = styled.div`
  width: 100%;
  height: 4.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebe7e7;
`;

const ExplanContainer = styled.div`
  display: flex;
`;

const LogoImg = styled.img`
  height: 2.5rem;
  margin-top: 0.4rem;
  margin-left: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

const Explan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
`;

const ExplanKor = styled.div`
  font-size: 1rem;
  color: #959494;
`;

const ExplanEng = styled.div`
  font-size: 1rem;
  color: #12348d;
`;

const Category = styled.a`
  font-size: 1rem;
  margin: 0 1.6rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Authentication = styled.a`
  font-size: 1rem;
  margin-right: 1.8rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function NavBar() {
  return (
    <NavigationBar>
      <ExplanContainer>
        <LogoImg src={Logo} alt="로고" />
        <Explan>
          <ExplanKor>성결대학교 중고거래 플랫폼</ExplanKor>
          <ExplanEng>CAMPUS CONNECT</ExplanEng>
        </Explan>
      </ExplanContainer>
      <div>
        <Category>서비스 이용 안내</Category>
        <Category>전체 공지사항</Category>
        <Category>거래 게시판</Category>
      </div>
      <div>
        <Authentication>로그인</Authentication>
        <Authentication>회원가입</Authentication>
      </div>
    </NavigationBar>
  );
}

export default NavBar;
