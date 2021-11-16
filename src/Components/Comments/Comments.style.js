import styled from "styled-components";

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const StyledCommentBox = styled.div`
  background: ${(props) => props.theme.comment.background};
  border: ${(props) => props.theme.comment.border};
  border-radius: ${(props) => props.theme.border.radius};
  padding: 1rem 2rem;
`;

export const StyledCommentBoxInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 1rem;
`;

export const StyledCommentName = styled.span`
  display: block;
  font-weight: bold;
  color: ${(props) => props.theme.color.text};
`;

export const StyledCommentDate = styled.span`
  font-size: 0.675rem;
  color: ${(props) => props.theme.color.text};
`;

export const StyledCommentBoxMessage = styled.div`
  margin-top: 1.5rem;

  & p {
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 1 rem;
    color: ${(props) => props.theme.color.text};
  }
`;

export const StyledCommentPlus = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;

  & span {
    padding: 0 0.5rem;
    color: ${(props) => props.theme.like.span};
  }

  & button {
    width: 22px;
    height: 22px;
    border: none;
    color: ${(props) => props.theme.like.color};
    background: ${(props) => props.theme.like.background};
    border: ${(props) => props.theme.like.border};
    border-radius: ${(props) => props.theme.border.radius};
  }
`;
