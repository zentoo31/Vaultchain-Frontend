import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-15 gap-16 sm:p-20">
      <div className="text-2xl font-bold text-center">
        Welcome to VaultChain
      </div>
      <div className="text-xl text-center flex flex-col items-center gap-4">
        <Image
          src="/logo.svg"
          alt="VaultChain Logo"
          width={200}
          height={200}
          className="rounded-full"
        />

        <span>Buy whatever you want, whenever you want, wherever you want.</span>
        <div className="text-lg text-gray-700 flex flex-row items-center gap-2">
          <Link
            href="/login"
            className="text-blue-500 hover:underline"
          >
            Sign In
          </Link>
          
          <span>or</span>

          <Link
            href="/register"
            className="text-blue-500 hover:underline"
          >
            Request your register
          </Link>

        </div>
      </div>
      <div className="text-sm text-gray-500">
        © 2025 VaultChain. All rights reserved.
      </div>
    </div>
  );
}
