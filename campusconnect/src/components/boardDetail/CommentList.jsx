import React, { useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment.jsx';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  border-top: 1px solid #ccc;
  margin-top: 30px;
  padding: 20px 20px 100px;
`;

const Header = styled.h1`
  text-align: left;
  font-size: 20px;
`;

const CommentsList = styled.div`
  margin-top: 20px;
`;

const CommentList = ({ comments, setComments }) => {

  const addComment = (text) => {
    setComments([...comments, { id: Date.now(), text, replies: [], date: new Date().toLocaleString() }]);
  };

  const updateComment = (id, newText) => {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, text: newText } : comment
    ));
  };

  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const addReply = (commentId, replyText) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? {
          ...comment,
          replies: [...comment.replies, { id: Date.now(), text: replyText, date: new Date().toLocaleString() }]
        }
        : comment
    ));
  };

  const updateReply = (commentId, replyId, newText) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? {
          ...comment,
          replies: comment.replies.map(reply =>
            reply.id === replyId ? { ...reply, text: newText } : reply
          )
        }
        : comment
    ));
  };

  const deleteReply = (commentId, replyId) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, replies: comment.replies.filter(reply => reply.id !== replyId) }
        : comment
    ));
  };

  return (
    <AppContainer>
      <Header>댓글 {comments.length}</Header>
      <CommentForm onSubmit={addComment} />
      <CommentsList>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            updateComment={updateComment}
            deleteComment={deleteComment}
            addReply={addReply}
            updateReply={updateReply}
            deleteReply={deleteReply}
          />
        ))}
      </CommentsList>
    </AppContainer>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }
`;

const CharacterCount = styled.div`
  text-align: right;
  font-size: 12px;
  color: #888;
`;

const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const maxLength = 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="댓글을 입력하세요"
        rows="4"
        maxLength={maxLength}
      />
      <CharacterCount>{text.length}/{maxLength}</CharacterCount>
      <Button type="submit">등록</Button>
    </Form>
  );
};

export default CommentList;
