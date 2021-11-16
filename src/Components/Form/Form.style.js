import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 1rem;
  margin-bottom: 2rem;

  & h3 {
    margin: 3rem 0 1rem;
    color: ${(props) => props.theme.color.text};
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const StyledAlert = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  width: 100%;

  & p {
    font-size: 0.8rem;
    color: red;
    padding-left: 0.2rem;
  }
`;

export const StyledButton = styled.button`
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${(props) => props.theme.border.radius};
  font-weight: 600;
  color: ${(props) => props.theme.form.color};
  background: ${(props) => props.theme.form.background};
  border: ${(props) => props.theme.form.border};
  margin: 1rem auto 0;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.form.hColor};
    background: ${(props) => props.theme.form.hBackgroundS};
  }
`;
