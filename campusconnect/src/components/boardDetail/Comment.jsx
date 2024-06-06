import React, { useState } from 'react';
import styled from 'styled-components';
import Reply from './Reply.jsx';
import axios from 'axios';

const Comment = ({ comment, updateComment, deleteComment, addReply, updateReply, deleteReply }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(comment.commentContent);
  const [replyText, setReplyText] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);
  const maxLength = 100;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateComment(comment.commentId, text);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteComment(comment.commentId);
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      addReply(comment.commentId, replyText);
      setReplyText('');
    }
  };

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };


  return (
    <CommentContainer>
      <CommentHeader>
        <CommentAuthor>
          <img src="/default.png" alt="profile" />
          <div className="class">{comment.commenterDepartment}</div>
          <div>{comment.commenterName}</div>
        </CommentAuthor>
        <CommentInfo>
          {formatDate(comment.createdAt ? comment.createdAt : comment.modifiedAt)}
          <CommentActions>
            <div className="edit-btn" onClick={handleEdit}>수정</div>
            <div className="delete-btn" onClick={handleDelete}>삭제</div>
          </CommentActions>
        </CommentInfo>
      </CommentHeader>
      {isEditing ? (
        <EditTextAreaWrapper>
          <TextArea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={maxLength}
          />
          <CharacterCount>{text.length}/{maxLength}</CharacterCount>
          <Button onClick={handleUpdate}>수정</Button>
        </EditTextAreaWrapper>
      ) : (
        <CommentContent>
          {comment.commentContent}
          <div className="reply-toggle"
               onClick={toggleReplyForm}>답글달기 <span>({comment?.boardReplyDetailResponses?.length || 0})</span></div>
        </CommentContent>
      )}
      {showReplyForm && (
        <>
          <RepliesList>
            {comment?.boardReplyDetailResponses?.map(reply => (
              <Reply
                key={reply.id}
                reply={reply}
                updateReply={updateReply}
                deleteReply={deleteReply}
                commentId={comment.commentId}
              />
            ))}
          </RepliesList>
          <Form onSubmit={handleReplySubmit}>
            <ReplyTitle>답글 작성하기</ReplyTitle>
            <TextArea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="답글을 입력하세요"
              rows="2"
              maxLength={maxLength}
            />
            <CharacterCount>{replyText.length}/{maxLength}</CharacterCount>
            <Button type="submit">등록</Button>
          </Form>
        </>
      )}
    </CommentContainer>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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

const CommentContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentContent = styled.div`
  margin: 10px 0;

  .reply-toggle {
    color: #007bff;
    cursor: pointer;
    font-size: 14px;
    margin-top: 15px;

    span {
      color: red;
    }
  }
`;

const CommentActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;

  .edit-btn {
    font-size: 14px;
    color: #1a1afa;
    cursor: pointer;
  }

  .delete-btn {
    font-size: 14px;
    color: red;
    cursor: pointer;
  }
`;

const RepliesList = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

const CommentInfo = styled.div`
  color: #888;
  font-size: 12px;
`;

const CommentAuthor = styled.div`
  font-size: 12px;
  margin-right: 10px;
  display: flex;
  align-items: center;

  > img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }

  .class {
    margin-right: 5px;
  }
`;

const EditTextAreaWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;

  > textarea {
    width: 97%;
  }
`;

const ReplyTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 20px;
`;

export default Comment;
