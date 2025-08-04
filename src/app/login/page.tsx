import React from 'react'

function Login() {
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
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
