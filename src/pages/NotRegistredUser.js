import React, { useContext } from 'react';
import { UserForm } from '../components/userForm';
import { Context } from '../Context';
import { useLoginMutation } from '../hooks/useLoginMutation';
import { useRegisterMutation } from '../hooks/useRegisterMutation';

export const NotRegisteredUser = () => {
  const { registerMutation, loading, error } = useRegisterMutation();
  const { login, loading: loadingLogin, error: errorLogin } = useLoginMutation();
  const { activateAuth } = useContext(Context);

  const errorMsg = error && 'El usuario ya existe o hay algun problema.';
  const errorLoginMsg = errorLogin && 'La contraseña no es correcta o el usuario no existe';

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(({ data }) => {
      console.log(data);
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    login({ variables }).then(({ data }) => {
      console.log(data);
      const { login } = data;
      activateAuth(login);
    });
  };

  return (
    <>
      <UserForm disabled={loading} title='Registrarse' error={errorMsg} onSubmit={onSubmit} />
      <UserForm disabled={loadingLogin} title='Iniciar sesión' onSubmit={onSubmitLogin} error={errorLoginMsg} />
    </>
  );
};
