import React from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../../interfaces";

export const Register = () => {
  const { register, handleSubmit } = useForm<IUser>({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      bio: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const formHandler = async (data: IUser) => {
    console.log(data);
  };

  return (
    <section className="bg-black">
      <form onSubmit={handleSubmit(formHandler)}>
        <label htmlFor='name'>Nome</label>
        <input type='text' {...register("name")} />
        <label htmlFor='bio'>Bio</label>
        <textarea {...register("bio")} cols={30} rows={10}></textarea>
        <label htmlFor='phone'>Fone</label>
        <input type='text' {...register("phone")} />
        <label htmlFor='email'>Email</label>
        <input type='email' {...register("email")} />
        <label htmlFor='password'>Senha</label>
        <input type='password' {...register("password")} />
        <input type='submit' value='Salvar' />
      </form>
    </section>
  );
};
