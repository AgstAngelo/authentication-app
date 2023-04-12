import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../../interfaces";
import { mock } from "../../mock";

type LoginValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const { register, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signOut = () => {
    setUser(null);
    console.log("usuário saiu");
  };

  const formHandler = async (data: LoginValues) => {
    console.log(data);
    if (data.email === mock.email) {
      setUser(mock);
      reset();
    }
  };

  return (
    <section>
      {user ? (
        <Fragment>
          <h3>Bem Vindo!</h3>
          <button onClick={() => signOut()}>Sair</button>
        </Fragment>
      ) : (
        <form onSubmit={handleSubmit(formHandler)}>
          <label htmlFor='email'>Email</label>
          <input type='text' {...register("email")} />
          <label htmlFor='password'>Senha</label>
          <input type='password' {...register("password")} />
          <input type='submit' value='Entrar' />
        </form>
      )}
    </section>
  );
};
