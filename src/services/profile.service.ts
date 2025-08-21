import axios, { AxiosError } from "axios";
import { handleError } from "@/utils/errorHandler";
import { ProfileInfo } from "@/interfaces/profile-info";
import { getApiUrl } from "@/utils/env";

export class ProfileService {
    private readonly apiUrl: string = `${getApiUrl()}/profile`;
    
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