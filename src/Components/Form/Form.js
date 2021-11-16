import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useGlobalContext } from "../../Context/Context";
import InputText from "../InputText/InputText";
import Comment from "../Comments/Comments";
import {
  StyledForm,
  StyledInputContainer,
  StyledButton,
  StyledAlert,
} from "./Form.style";

const Comments = ({ postID }) => {
  const { comment, dispatch } = useGlobalContext();

  const handleComments = (values) => {
    const data = { ...values, postID };
    dispatch({ type: "ADD_COMMENT", comment: { ...data } });
    window.location.reload();
  };

  const commentInitialValues = {
    nome: "",
    email: "",
    mensagem: "",
  };

  const commentValidationSchema = Yup.object().shape({
    nome: Yup.string().required("Digite seu nome"),
    email: Yup.string()
      .email("Digite um e-mail válido.")
      .required("Digite seu e-mail"),
    mensagem: Yup.string().required("Digite seu comentário"),
  });

  return (
    <>
      <Formik
        validationSchema={commentValidationSchema}
        initialValues={commentInitialValues}
        onSubmit={handleComments}
      >
        {(formProps) => {
          const { handleSubmit, errors } = formProps;
          return (
            <StyledForm>
              <h3>Deixe seu Comentário:</h3>
              <StyledInputContainer>
                <StyledAlert>
                  <Field
                    component={InputText}
                    type='text'
                    name='nome'
                    placeholder='Nome'
                  />
                  {errors.nome && <p>{errors.nome}</p>}
                </StyledAlert>
                <StyledAlert>
                  <Field
                    component={InputText}
                    type='email'
                    name='email'
                    placeholder='E-mail'
                  />
                  {errors.email && <p>{errors.email}</p>}
                </StyledAlert>
              </StyledInputContainer>
              <StyledAlert>
                <Field component={InputText} type='textarea' name='mensagem' />
                {errors.mensagem && <p>{errors.mensagem}</p>}
              </StyledAlert>
              <StyledButton type='button' onClick={handleSubmit}>
                Publicar
              </StyledButton>
            </StyledForm>
          );
        }}
      </Formik>
      {comment
        .filter((item) => item.postID === postID)
        .map((item) => {
          return <Comment key={item.id} {...item} />;
        })}
    </>
  );
};

export default Comments;
