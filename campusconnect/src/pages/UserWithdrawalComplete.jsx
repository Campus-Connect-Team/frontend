import React from 'react'
import NavBar from '../components/NavBar';
import styled from 'styled-components';

function DeletePage() {
  return (
    <Delete> 
    {/* Title Wrap*/}
    <div className = "titleWrap">
        회원 탈퇴 완료!
    </div>

     {/* value Wrap*/}
     <div className = "valueWrap">
     회원 탈퇴가 완료되었어요! <div>
     사용 중에 불편했거나 개선해야 할 부분이 필요하다면 홈페이지 맨 하단 메일로 건의해 주세요!</div>
    </div>

        <div>
    <button>확인</button>
    </div> 

    </Delete>
)
}
    <>
      <NavBar />
      <div>회원 탈퇴 완료 페이지입니다.</div>
    </>
export default DeletePage;

const Delete = styled.div`

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
    margin-top: 150px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    color: #262626;

}

.valueWrap {
    white-space: pre-line;
    margin-top: 15px;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    color: #c0c0c0;
}

.contentWrap{
    text-align: center;
    margin-top: 50px;
    flex: 1;
    width:100%;
    }

  .numbertext{
    padding-left: 10px;
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
  `