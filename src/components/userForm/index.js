import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Error, Title, Form, Input } from './styles';
import { SubmitButton } from '../SubmitButton';

export const UserForm = ({ onSubmit, title, disabled, error }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitButton disabled={disabled}> {title} </SubmitButton>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  );
};
