import React from "react";
import {
  StyledComment,
  StyledCommentBox,
  StyledCommentBoxInfo,
  StyledCommentInfo,
  StyledCommentName,
  StyledCommentDate,
  StyledCommentBoxMessage,
  StyledCommentPlus,
} from "./Comments.style";
import image from "./img/user.png";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const Comments = ({ id, nome, email, mensagem, likes = 0 }) => {
  const [like, setLike] = React.useState(likes);
  const [readComments, setReadComments] = React.useState([]);

  const handleClick = (e) => {
    if (e.currentTarget.id === "up") {
      setLike((prev) => prev + 1);
    }

    if (e.currentTarget.id === "down") {
      setLike((prev) => prev - 1);
    }

    const likes = readComments.find((item) => item.id === id);
    const obj = { ...likes, likes: like };
    const index = readComments.findIndex((item) => item.id === id);
    readComments[index] = obj;
    localStorage.setItem("comments", JSON.stringify(readComments));
  };

  React.useEffect(() => {
    setReadComments(JSON.parse(localStorage.getItem("comments")));
  }, [like]);

  return (
    <StyledComment key={id}>
      <StyledCommentBox>
        <StyledCommentBoxInfo>
          <img src={image} alt={nome} width='40' />
          <StyledCommentInfo>
            <StyledCommentName>{nome}</StyledCommentName>
            <StyledCommentDate>{email}</StyledCommentDate>
          </StyledCommentInfo>
        </StyledCommentBoxInfo>
        <StyledCommentBoxMessage>
          <p>{mensagem}</p>
        </StyledCommentBoxMessage>
        <div>
          <StyledCommentPlus>
            <button id='up' onClick={handleClick}>
              <GoTriangleUp />
            </button>
            <span>{like}</span>
            <button id='down' onClick={handleClick}>
              <GoTriangleDown />
            </button>
          </StyledCommentPlus>
        </div>
      </StyledCommentBox>
    </StyledComment>
  );
};

export default Comments;
