import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sign In - VaultChain"
};

function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <div>
       {children}
    </div>
  )
}

export default LoginLayout
