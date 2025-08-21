"use client"
import { ProfileService } from "@/services/profile.service";
import { ProfileInfo } from "@/interfaces/profile-info";
import { useEffect, useState } from "react";

function Dashboard() {
  const profileService = new ProfileService();
  const [profile, setProfile] = useState<ProfileInfo | null>(null);

  const getProfileInfo= async() =>{
    try {
      const profileData = await profileService.getProfileInfo();
      setProfile(profileData);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <div className='font-sans items-center justify-center min-h-screen p-8 pb-15 gap-16 sm:p-20'>
        <h1>Dashboard</h1>
        <h2>BTC Adresss: {profile?.wallet.bitcoinAddress}</h2>
    </div>
  )
}

export default Dashboard;
