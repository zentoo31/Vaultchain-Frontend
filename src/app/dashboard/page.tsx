"use client"
import { ProfileService } from "@/services/profile.service";
import { ProfileInfo } from "@/interfaces/profile-info";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { toastGeneralOptions } from '@/utils/toastGeneralOptions';
import { IoLogoBitcoin } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();
  const profileService = new ProfileService();
  const [profile, setProfile] = useState<ProfileInfo | null>(null);
  const success = (message: string) => toast.success(message, toastGeneralOptions);
  const errorn = (message: string) => toast.error(message, toastGeneralOptions);

  const getProfileInfo = async () => {
    try {
      const profileData = await profileService.getProfileInfo();
      setProfile(profileData);
      success('Data loaded successfully!');
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : 'Failed to load profile data.';
      console.log('Error fetching profile info:', errMsg);
      errorn(errMsg);
    }
  }

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <div className='font-sans flex flex-col gap-4'>
      <div className="flex flex-row gap-2 p-4 justify-between border-b-gray-500 border-[0.5px] items-center" onClick={() => router.push('/login')}>
        <Button className="flex flex-row items-center gap-2 rounded-lg bg-gray-100 px-2 text-black cursor-pointer hover:bg-gray-200">
          <CgProfile size={18} />
          <span className="">{profile?.email}</span>
        </Button>

        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        <div>
          <Button className="bg-red-500 hover:bg-red-600 text-white cursor-pointer">
            Logout
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h2 className="flex flex-row gap-2">
          <IoLogoBitcoin size={20} /> BTC Adresss: {profile?.wallet.bitcoinAddress}
        </h2>
      </div>
      <Toaster />
    </div>
  )
}

export default Dashboard;
