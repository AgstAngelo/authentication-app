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
    <section className="flex flex-col h-full items-center justify-center">
      <div className="flex flex-col justify-center items-center border-gray-200 border-2 rounded-3xl max-w-md py-10 px-14 [&>*]:my-3">
        <div className="w-full flex justify-start">
          <img className="self-start" src='../src/assets/devchallenges.svg' alt='devchallenges_logo' />
        </div>
        <h3 className="text-lg font-bold">Join thousands of learners from around the world</h3>
        <p className="tracking-tight">Master web development by making real-life projects. There are multiple paths for you to choose</p>
        <form className="w-full flex flex-col [&>*]:py-2 [&>*]:my-1" onSubmit={handleSubmit(formHandler)}>
          <input className="border-gray-200 border-2 rounded-lg placeholder:pl-2 px-2" type='text' {...register("email")} placeholder='email' />
          <input className="border-gray-200 border-2 rounded-lg placeholder:pl-2 px-2" type='password' {...register("password")} placeholder='password' />
          <input className="bg-sky-500 text-white rounded-lg" type='submit' value='Start coding now' />
        </form>
          <span className="text-sm text-gray-500 tracking-normal">or continue with these social profile</span>
          <div className="flex justify-center w-full [&>*]:px-2">
            <img src='../src/assets/Google.svg'/>
            <img src='../src/assets/F acebook.svg'/>
            <img  src='../src/assets/Twitter.svg'/>
            <img src='../src/assets/Github.svg' />
          </div>
          <p className="text-sm text-gray-500 tracking-normal">Already a member? Login</p>
      </div>
    </section>
  );
};
