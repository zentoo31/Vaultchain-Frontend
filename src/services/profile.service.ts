import axios, { AxiosError } from "axios";
import { handleError } from "@/utils/errorHandler";
import { ProfileInfo } from "@/interfaces/profile-info";

export class ProfileService {
    private readonly apiUrl: string = `${process.env.API_BACKEND_URL}/profile` || 'http://localhost:4321/profile';
    
    async getProfileInfo(): Promise<ProfileInfo> {
        try {
            const response = await axios.get<ProfileInfo>(`${this.apiUrl}/info`, { 
                withCredentials: true 
            });
            return response.data;
        } catch (error){
            const axiosError = error as AxiosError;
            throw handleError(axiosError);
        }
    }
}