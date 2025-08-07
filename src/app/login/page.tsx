"use client"
import React from 'react';
import toast, { Toaster, ToastOptions } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { AuthService } from '@/services/auth.service';
import { toastGeneralOptions } from '@/utils/toastGeneralOptions';
import { LoginDTO } from '@/dto/loginDTO';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const authService = new AuthService();
  const credentials: LoginDTO = {
    email: '',
    password: ''
  };

  const sucess = (message:string) => toast.success(message, toastGeneralOptions);
  const error = (message: string) => toast.error(message, toastGeneralOptions);

  const handleLogin = async (logintDTO: LoginDTO) => {
    setIsLoading(true);
    try {
      const user = await authService.login(logintDTO);
      sucess('Login successful!');
      console.log('Logged in user:', user);
    } catch (err) {
      error(typeof err === 'string' ? err : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  } 


  return (
    <div className='font-sans items-center justify-center min-h-screen p-8 pb-15 gap-16 sm:p-20'>
      <div className='text-2xl font-bold text-center mb-8'>
        Login to VaultChain
      </div>
      <form className='flex flex-col items-center gap-4'>
        <input
          type='email'
          placeholder='Email'
          className='p-2 border border-gray-300 rounded w-full max-w-md'
          required
        />
        <input
          type='password'
          placeholder='Password'
          className='p-2 border border-gray-300 rounded w-full max-w-md'
          required
        />
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded w-full max-w-md hover:bg-blue-600 transition-colors'
          onClick={sucess.bind(null, "Login successful!")}
        >
          Login
        </button>
        <Toaster />
      </form>
    </div>
  )
}

export default Login
