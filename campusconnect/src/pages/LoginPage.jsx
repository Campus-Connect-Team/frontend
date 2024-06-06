import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

function LoginPage() {
  const navigate = useNavigate();
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://15.165.91.27:8080/users/log-in', {
        studentNumber,
        password
      });

      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('studentNumber', response.data.studentNumber);
        localStorage.setItem('department', response.data.department);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('userProfileImage', response.data.userProfileImage);
        navigate('/board');
      }
    } catch (error) {
      alert(error.response.data.responseCode);
    }
  };

  return (
    <div style={{ height: '100%' }}>
      <NavBar />
      <Login>
        {/* Title Wrap*/}
        <div className="titleWrap">로그인</div>

        {/* Value Wrap*/}
        <div className="valueWrap">원활한 서비스 이용을 위해 로그인이 필요해요.</div>

        <form onSubmit={handleLogin}>
          {/* Content Wrap - 학번 입력 */}
          <div className="contentWrap">
            <div className="numbertext">
              <div className="inputTitle">
                학번{' '}
                <input
                  type="text"
                  placeholder="학번을 입력해주세요."
                  maxLength={20}
                  value={studentNumber}
                  onChange={(e) => setStudentNumber(e.target.value)}
                  style={{ marginLeft: '3px' }}
                />
              </div>
            </div>
          </div>

          {/* Content Wrap - 비밀번호 입력 */}
          <div className="contentWrap">
            <div className="inputTitle">
              비밀번호
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                maxLength={20}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginLeft: '5px' }}
              />
            </div>
          </div>

          <div>
            <button type="submit">로그인</button>
          </div>
        </form>

        <p className="join">
          아직 계정이 없으신가요? <a href="/signup">회원가입</a>
        </p>
        <p className="forgot-password">
          비밀번호를 분실했나요? <a href="/findpassword">비밀번호 찾기</a>
        </p>
      </Login>
      <Footer />
    </div>
  );
}

export default LoginPage;

const Login = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
  //background-color: #23abeb;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px; /* Added to ensure space for the footer */

  .titleWrap {
    margin-top: 87px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    color: #262626;
  }

  .valueWrap {
    white-space: pre-line;
    margin-top: 15px;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    color: #c0c0c0;
  }

  .contentWrap {
    text-align: center;
    margin-top: 50px;
    flex: 1;
    width: 95%;
  }

  > div {
    margin-left: 10px;
  }

  .numbertext {
    padding-left: 25px;
  }

  input {
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 500;
  }

  button {
    margin: 0 auto;
    display: flex;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    background-color: #5b7eef;
    padding: 10px 50px;
    color: #fff;
    border-radius: 10px;
    font-size: 12px;
    cursor: pointer;
  }

  .join {
    text-align: center;
    font-size: 15px;
  }

  .forgot-password {
    text-align: center;
    font-size: 15px;
  }
`;
