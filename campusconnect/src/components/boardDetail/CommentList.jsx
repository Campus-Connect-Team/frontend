import React, { useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment.jsx';
import axios from 'axios';

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


  const addComment = async (text) => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axios.post(`http://15.165.91.27:8080/boards/2/comments`, { commentContent: text }, {
      headers: {
        Authorization: accessToken
      }
    });
    setComments([...comments, response.data]);
  };

  const updateComment = async (id, newText) => {
    console.log(id);
    const accessToken = localStorage.getItem('accessToken');
    const response = await axios.patch(`http://15.165.91.27:8080/boards/2/comments/${id}`, { commentUpdateContent: newText }, {
      headers: {
        Authorization: accessToken
      }
    });

    setComments(comments.map(comment =>
      comment.commentId === id ? { ...comment, commentContent: newText } : comment
    ));
  };

  const deleteComment = async (id) => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axios.delete(`http://15.165.91.27:8080/boards/2/comments/${id}`, {
      headers: {
        Authorization: accessToken
      }
    });
    setComments(comments.filter(comment => comment.commentId !== id));
  };

  const addReply = async (commentId, replyText) => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axios.post(`http://15.165.91.27:8080/boards/2/comments/${commentId}/replies`, { replyContent: replyText }, {
      headers: {
        Authorization: accessToken
      }
    });

    setComments(comments.map(comment =>
      comment.commentId === commentId
        ? {
          ...comment,
          boardReplyDetailResponses : [...(comment.boardReplyDetailResponses || []), response.data]
        }
        : comment
    ));
  };

  const updateReply = async (commentId, replyId, newText) => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axios.patch(`http://15.165.91.27:8080/boards/2/comments/${commentId}/replies/${replyId}`, { replyUpdateContent: newText }, {
      headers: {
        Authorization: accessToken
      }
    });

    setComments(comments.map(comment =>
      comment.commentId === commentId
        ? {
          ...comment,
          boardReplyDetailResponses: comment.boardReplyDetailResponses.map(reply =>
            reply.replyId === replyId ? { ...reply, replyContent: newText } : reply
          )
        }
        : comment
    ));
  };

  const deleteReply = async (commentId, replyId) => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axios.delete(`http://15.165.91.27:8080/boards/2/comments/${commentId}/replies/${replyId}`, {
      headers: {
        Authorization: accessToken
      }
    });

    setComments(comments.map(comment =>
      comment.commentId === commentId
        ? { ...comment, boardReplyDetailResponses: comment.boardReplyDetailResponses.filter(reply => reply.replyId !== replyId) }
        : comment
    ));
  };


  return (
    <AppContainer>
      <Header>댓글 {comments?.length}</Header>
      <CommentForm onSubmit={addComment} />
      <CommentsList>
        {comments?.map(comment => (
          <Comment
            key={comment.commentId}
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
