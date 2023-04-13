import React from 'react';
import { useLocation } from 'react-router-dom';

export const Profile = () => {
  const { state } = useLocation();

  return (
    <h3 className='text-xl'>Bem vindo, {state?.name}!</h3>
  )
}
