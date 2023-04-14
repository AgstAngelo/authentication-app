import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mock } from '../../mock';
import { IUser } from '../../interfaces';
import { useForm } from 'react-hook-form';

type userInfo = {
  name: string,
  bio: string,
  phone: string,
  email: string,
  password: string,
};

export const Profile = () => {
  const { state } = useLocation();

  const [ updateInfo, setUpdateInfo ] = useState(true);
  const [ user, setUser ] = useState <IUser | null>(null);

  const { register, handleSubmit, formState: dirtyValues } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      bio: "",
      phone: "",
      email: "",
      password: ""
    }
  })

  useEffect(() => {
    if(state) {
      setUser(state);
    }
  }, []);


  const formHandler = (formValues: userInfo) => {
    console.log(formValues);
  }

  return (
    <section className="w-full flex flex-col h-full items-center justify-center max-w-4xl mx-auto">
      {
      updateInfo 
      ? (
        <Fragment>
        <div className='flex flex-col items-center [&>*]:py-1 pb-6'>
          <h2 className='text-4xl tracking-tighter'>Personal info</h2>
          <p className='tracking-tight text-lg'>Basic info, like your name and photo</p>
        </div>
        <div className="
          w-full flex flex-col [&>article]:flex [&>article]:w-full 
          border-gray-200 border rounded-xl max-w-4xl [&>*]:py-6 [&>*]:px-12
          [&>article]:border-b last:border-b-0"
        >
          <article className='w-full justify-between p-1'>
            <div className=''>
              <h3 className='text-2xl'>Profile</h3>
              <span className='text-gray-500 text-sm'>Some info may be visible to other people</span>
            </div>
              <button 
                className='w-24 h-10 border rounded-xl border-gray-400 text-gray-400 font-medium tracking-tight my-auto' 
                onClick={() => setUpdateInfo(!updateInfo)}
              >
                Edit
              </button>
          </article>
          <article>
            <p className="w-1/3 text-sm tracking-tight uppercase text-gray-400">Photo</p>
            <span className="w-2/3 font-medium text-lg"></span>
          </article>
          <article>
            <p className="w-1/3 text-sm tracking-tight uppercase text-gray-400">Name</p>
            <span className="w-2/3 font-medium text-lg">{user?.name}</span>
          </article>
          <article>
            <p className="w-1/3 text-sm tracking-tight uppercase text-gray-400">Bio</p>
            <span className="w-2/3 font-medium text-lg">{user?.bio}</span>
          </article>
          <article>
            <p className="w-1/3 text-sm tracking-tight uppercase text-gray-400">Phone</p>
            <span className="w-2/3 font-medium text-lg">{user?.phone}</span>
          </article>
          <article>
            <p className="w-1/3 text-sm tracking-tight uppercase text-gray-400">Email</p>
            <span className="w-2/3 font-medium text-lg">{user?.email}</span>
          </article>
          <article className=''>
            <p className="w-1/3 text-sm tracking-tight uppercase text-gray-400">Password</p>
            <span className="w-2/3 font-medium text-lg">{user?.password}</span>
          </article>
        </div>
        </Fragment>
      ) : (
        <Fragment>
        <div className='w-full flex px-2 py-4'>
          <button className='text-sky-500 text-xl' onClick={() => setUpdateInfo(!updateInfo)}>Back</button>
        </div>
        <form 
          className="
            w-full flex flex-col border-gray-200 border rounded-xl max-w-4xl px-12 pt-2 pb-6
            [&>article]:mb-1 [&>article]:py-2 [&>article]:flex [&>article]:flex-col [&>article]:w-full" 
          onSubmit={handleSubmit(formHandler)}
        >
          <h3 className='text-2xl pt-6 tracking-tight font'>Change Info</h3>
          <span className='text-gray-500 text-sm pt-1 pb-3 tracking-tight'>Changes will be reflected in every services</span>
          <article>
            <label className='text-sm tracking-tight' htmlFor="password">Change Photo</label>
          </article>
          <article>
            <label className='text-sm tracking-tight' htmlFor="name">Name</label>
            <input className='w-1/2 placeholder:text-gray-300 shadow border border-gray-400 rounded-xl h-12 px-4 py-3 placeholder:text-sm' placeholder='Enter your name...' type="text" {...register("name")}/>
          </article>
          <article>
            <label className='text-sm tracking-tight' htmlFor="bio">Bio</label>
            <textarea className='w-1/2 placeholder:text-gray-300 shadow border resize-none border-gray-400 rounded-xl px-4 py-3 placeholder:text-sm' placeholder='Enter your bio...' {...register("bio")} name="" cols={30} rows={10}>
            </textarea>
          </article>
          <article>
            <label className='text-sm tracking-tight' htmlFor="phone">Phone</label>
            <input className='w-1/2 placeholder:text-gray-300 shadow border border-gray-400 rounded-xl h-12 px-4 py-3 placeholder:text-sm' placeholder='Enter your phone...' type="text" {...register("phone")}/>
          </article>
          <article>
            <label className='text-sm tracking-tight' htmlFor="email">Email</label>
            <input className='w-1/2 placeholder:text-gray-300 shadow border border-gray-400 rounded-xl h-12 px-4 py-3 placeholder:text-sm' placeholder='Enter your email...' type="email" {...register("email")}/>
          </article>
          <article>
            <label className='text-sm tracking-tight' htmlFor="password">Password</label>
            <input className='w-1/2 placeholder:text-gray-300 shadow border border-gray-400 rounded-xl h-12 px-4 py-3 placeholder:text-sm' placeholder='Enter your password...' type="text" {...register("password")}/>
          </article>
          <input className='text-white w-20 h-9 rounded-lg bg-blue-500 mt-2' type="submit" value="Save"/>
        </form>
        </Fragment>
      )}
    </section>
  )
}