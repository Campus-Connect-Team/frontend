import styled from 'styled-components';

const DeleteBtn = styled.button`
  border: none;
  width: 7rem;
  height: 2.2rem;
  background-color: #ff4141;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 10%;

  &: hover {
    cursor: pointer;
  }
`;

function DeleteAccountBtn() {
  return <DeleteBtn type="button">회원 탈퇴</DeleteBtn>;
}

export default DeleteAccountBtn;
