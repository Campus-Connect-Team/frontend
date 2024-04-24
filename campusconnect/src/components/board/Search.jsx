import styled from 'styled-components';

const Wrapper = styled.div`
  width: 55%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.form`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchTitle = styled.p`
  font-size: 1rem;
`;

const Input = styled.input`
  width: 14rem;
  height: 1rem;
  padding: 0.5rem;
  margin-left: 0.3rem;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 8rem;
  height: 2.2rem;
  color: #fff;
  background-color: #4181ff;
  border: none;
  border-radius: 10px;
  font-size: 0.875rem;

  &: hover {
    cursor: pointer;
    background: #3165c9;
  }
`;

function Search() {
  return (
    <Wrapper>
      <Form>
        <InputWrapper>
          <SearchTitle>학과(학부)</SearchTitle>
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <SearchTitle>키워드</SearchTitle>
          <Input type="text" />
        </InputWrapper>
        <Button type="button">검색</Button>
      </Form>
      <Button type="button">게시글 작성</Button>
    </Wrapper>
  );
}

export default Search;
