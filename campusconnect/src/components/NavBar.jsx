import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavigationBar = styled.div`
  width: 100%;
  height: 6.5rem;
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

const StyledWrapper = styled.div`
  margin-right: 30px;
  width: 170px;

  .nav-seller-info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .name {
      margin-bottom: 3px;
      text-align: end;
      cursor: pointer;
    }

    .info {
      font-size: 14px;
      color: #007aff;
    }

    > img {
      width: 45px;
      height: 45px;
      margin-right: 10px;
    }
  }

  .nav-logout {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    cursor: pointer;

    > img {
      width: 20px;
      height: 20px;
    }
  }
`;

function NavBar() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('studentNumber');
    localStorage.removeItem('department');
    localStorage.removeItem('name');
    localStorage.removeItem('userProfileImage');
    navigate('/login');
  };

  useEffect(() => {
    const localStorageName = localStorage.getItem('name') || '김OO';
    const localStorageDepartment = localStorage.getItem('department') || '정보통신공학과';

    setName(localStorageName);
    setDepartment(localStorageDepartment);
  }, []);


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
        <Category onClick={() => navigate('/board')}>거래 게시판</Category>
      </div>
      {/*<div>*/}
      {/*  <Authentication>로그인</Authentication>*/}
      {/*  <Authentication>회원가입</Authentication>*/}
      {/*</div>*/}
      <StyledWrapper>
        {localStorage.getItem('accessToken') &&
          <>
            <div className="nav-seller-info">
              <img src="/default.png" />
              <div>
                <div className="name" onClick={() => navigate('/mypage')}>{department} <br /> {name}</div>
              </div>
            </div>

            <div className="nav-logout" onClick={handleLogout}>
              <img src="/src/assets/Logo.png" />
              <div>
                <div>로그아웃</div>
              </div>
            </div>
          </>
        }

      </StyledWrapper>

    </NavigationBar>
  );
}

export default NavBar;
