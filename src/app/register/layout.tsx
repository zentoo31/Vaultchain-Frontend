import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Register - VaultChain"
};

function RegisterLayout({
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

export default RegisterLayout
