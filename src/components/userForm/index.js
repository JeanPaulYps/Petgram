import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Error, Title, Form, Input, Button } from './styles';

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
        <Button disabled={disabled}> {title} </Button>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  );
};
