import NavBar from '../components/NavBar';
import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer.jsx';

function LoginPage() {
  return (
    <Login> 
        <NavBar />

    {/* Title Wrap*/}
    <div className = "titleWrap">
        로그인
    </div>

     {/* value Wrap*/}
     <div className = "valueWrap">
        원활한 서비스 이용을 위해 로그인이 필요해요.
    </div>

    {/* contentWrap - 학번 입력 */}
    <div className = "contentWrap">
      <div className = "numbertext">
        <div className="inputTitle">학번 {" "}
        <input placeholder= "학번을 입력해주세요." maxLength={20}/>
        </div>
        </div>
        </div>

 
    {/* contentWrap - 비밀번호 입력 */}
    <div className = "contentWrap">
        <div className="inputTitle">비밀번호{" "}
        <input placeholder= "비밀번호를 입력해주세요." maxLength={20}/>
        </div>
        </div>
        
    <div>
    <button>로그인</button>
    </div>
    <p className="join">
            아직 계정이 없으신가요? <a href="#">회원가입</a>
            </p>
            <p className="forgot-password">
            비밀번호를 분실했나요? <a href="#">비밀번호 찾기</a>
          </p>

          <Footer/>
    </Login>
   
  )
}
export default LoginPage;

 const Login = styled.div`

{
    position : absolute ;
    top:0;
    bottom : 0;
    width: 100% ;
    max-width : 500px;
    padding: 20px;
    left:50%;
    transform : translate(-50%,0);
    background-color: #23abeb;
    overflow : hidden;
    display: flex;
    flex-direction: column;
}

.titleWrap {
    margin-top: 100px;
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

.contentWrap{
    text-align: center;
    margin-top: 50px;
    flex: 1;
    width:95%;
    }

> div {
  margin-left: 10px;
}

.numbertext{
  padding-left:25px;
}

input{
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
}

  canvas {
    height: 100vh;
    pointer-events: none;
    position: fixed;
    width: 100%;
    z-index: 2;
  }
  
  button {
    margin : 0 auto;
    display: flex;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    padding-left: 180px;
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

  .forgot-password{
    text-align: center;
    font-size: 15px;
  }
  
