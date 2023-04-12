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
    <section className="">
      <img src='../src/assets/devchallenges.svg' alt='devchallenges_logo' />
      <h3>Join thousands of learners from around the world</h3>
      <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
      <form onSubmit={handleSubmit(formHandler)}>
        <input type='text' {...register("email")} placeholder='email' />
        <input type='password' {...register("password")} placeholder='password' />
        <input type='submit' value='Start coding now' />
        <span>or continue with these social profile</span>
        <div>
          <embed src='../src/assets/Google.svg' type='' />
          <embed src='../src/assets/Facebook.svg' type='' />
          <embed src='../src/assets/Twitter.svg' type='' />
          <embed src='../src/assets/Github.svg' type='' />
        </div>
        <p>Already a member? Login</p>
      </form>
    </section>
  );
};
