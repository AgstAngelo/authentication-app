import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../../interfaces";
import { mock } from "../../mock";
import { useNavigate, Link } from 'react-router-dom';

type LoginValues = {
  email: string;
  password: string;
};

export const Login = () => {

  const navigate = useNavigate();
  const [ hasLogin, setHasLogin ] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signOut = () => {
    console.log("usuário saiu");
  };

  const formHandler = async (data: LoginValues) => {
    if (data.email === mock.email) {
      const user: IUser = mock;
      reset();
      navigate("/profile", { state: user });
    }
  };


  return (
    <section className="flex flex-col h-full items-center justify-center">
      <div className="w-full flex flex-col justify-center items-center border-gray-200 border-2 rounded-3xl max-w-md py-10 px-14 [&>*]:my-3">
        <div className="w-full flex justify-start">
          <img className="self-start" src='../src/assets/devchallenges.svg' alt='devchallenges_logo' />
        </div>
        {
          hasLogin
          ? <h3 className="w-full text-lg font-bold">Login</h3>
          : (
            <>
              <h3 className="text-lg font-bold">Join thousands of learners from around the world</h3>
              <p className="tracking-tight">Master web development by making real-life projects. There are multiple paths for you to choose</p>
            </>
          )
        }
        <form className="w-full flex flex-col [&>*]:py-2 [&>*]:my-1" onSubmit={handleSubmit(formHandler)}>
          <input className="border-gray-200 border-2 rounded-lg placeholder:pl-2 px-2" type='text' {...register("email")} placeholder='email' />
          <input className="border-gray-200 border-2 rounded-lg placeholder:pl-2 px-2" type='password' {...register("password")} placeholder='password' />
          <input className="bg-sky-500 text-white rounded-lg" type='submit' value={hasLogin ? 'Login' : 'Start coding now'} />
        </form>
          <span className="text-sm text-gray-500 tracking-normal">or continue with these social profile</span>
          <div className="flex justify-center w-full [&>*]:px-2">
            <img src='../src/assets/Google.svg'/>
            <img src='../src/assets/Facebook.svg'/>
            <img  src='../src/assets/Twitter.svg'/>
            <img src='../src/assets/Github.svg' />
          </div>
          <p className="text-sm text-gray-500 tracking-normal">
            {hasLogin ? "Don't have an account yet? " : "Already a member? "}
          {
            hasLogin
            ? <Link to={'/register'}>Register</Link>
            : <Link to={'/'} onClick={() => setHasLogin(!hasLogin)}>Login</Link>
          }
          </p>
      </div>

    </section>
  );
};
