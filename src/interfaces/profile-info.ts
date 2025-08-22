export interface ProfileInfo{
    email: string;
    profile:{
        bio: string;
        avatarUrl: string;
    },
    wallet:{
        bitcoinAddress: string;
    }
}