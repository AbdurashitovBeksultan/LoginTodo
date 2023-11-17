// LoginForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const validationSchema = Yup.object({
  username: Yup.string().required('Введите имя пользователя'),
  password: Yup.string().required('Введите пароль'),
  email: Yup.string()
    .email('Введите корректный адрес электронной почты')
    .required('Введите адрес электронной почты'),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate('/todo');
    },
  });

  return (
    <StyleForm onSubmit={formik.handleSubmit}>
      <Style>Login</Style>
      <TextField
        label="Имя пользователя"
        variant="outlined"
        margin="normal"
        fullWidth
        id="username"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        label="Пароль"
        variant="outlined"
        margin="normal"
        fullWidth
        id="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        label="Адрес электронной почты"
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Button type="submit" variant="contained" color="success">
        Войти
      </Button>
    </StyleForm>
    
  );
};

export default LoginForm;

const StyleForm = styled.form`
width: 510px;
margin-left: 500px;
margin-top: 100px;
padding: 1%;
background-color: #0e938a;
`;
const Style = styled.h1`
  color:goldenrod; 
  margin-left: 210px;
  `;
