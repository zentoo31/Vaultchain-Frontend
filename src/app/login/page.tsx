"use client"
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { AuthService } from '@/services/auth.service';
import { toastGeneralOptions } from '@/utils/toastGeneralOptions';
import { LoginDTO } from '@/dto/loginDTO';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function Login() {
  const router = useRouter();
  const sucess = (message:string) => toast.success(message, toastGeneralOptions);
  const errorn = (message: string) => toast.error(message, toastGeneralOptions);
  const [isLoading, setIsLoading] = useState(false);
  const authService = new AuthService();
  const credentials: LoginDTO = {
    email: '',
    password: ''
  };

  const schema = z.object({
    email: z.email().min(1, 'Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long')
  });

  const { register, handleSubmit, formState: { errors } } = useForm<LoginDTO>({
    resolver: zodResolver(schema),
    defaultValues: credentials
  });

  const handleLogin = async (logintDTO: LoginDTO) => {
    setIsLoading(true);
    try {
      const user = await authService.login(logintDTO);
      console.log('Logged in user:', user);
      sucess('Login successful!');
      setTimeout(() => {
        router.push('/dashboard');
      }, 500);
    } catch (err: any) {
      const error = err.message ? err.message : 'Login failed. Please try again.';
      console.log('Login error:', error);
      errorn(error)
    } finally { 
      setIsLoading(false);
    }
  };

  return (
    <div className='font-sans items-center justify-center min-h-screen p-8 pb-15 gap-16 sm:p-20'>
      <div className='text-2xl font-bold text-center mb-8'>
        Login to VaultChain
      </div>
      <form className='flex flex-col items-center gap-4' onSubmit={handleSubmit(handleLogin)}>
        <input
          type='email'
          placeholder='Email'
          className='p-2 border border-gray-300 rounded w-full max-w-md'
          required
          {...register('email')}
        />
        <input
          type='password'
          placeholder='Password'
          className='p-2 border border-gray-300 rounded w-full max-w-md'
          required
          {...register('password')}
        />
        <Button type='submit' className='w-full max-w-md' disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
        <Toaster />
      </form>
    </div>
  )
}

export default Login
