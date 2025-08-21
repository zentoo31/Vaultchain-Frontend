import axios, {AxiosError} from 'axios';
import { User } from '@/interfaces/user';
import { LoginDTO } from '@/dto/loginDTO';
import { RegisterDTO } from '@/dto/registerDTO';
import { handleError } from '@/utils/errorHandler';
export class AuthService {
    private readonly apiUrl: string = process.env.API_BACKEND_URL || 'http://localhost:4321/auth';

    async login(credentials: LoginDTO): Promise<User> {
        try {
            const response = await axios.post<User>(`${this.apiUrl}/login`, credentials, {withCredentials: true});
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            throw handleError(axiosError);
        }
    }

    async register(userData: RegisterDTO): Promise<any> {
        try {
            const response = await axios.post<any>(`${this.apiUrl}/register`, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async verifyToken(cookie?: string){
        try {
            const response = await axios.get(`${this.apiUrl}/verify-token`,
                 {
                    headers:{
                        Cookie: cookie
                    },
                    withCredentials: true});
            return response;
        } catch (error) {
            throw error;
        }
    }

    async logout(): Promise<any> {
        try {
            const response =  await axios.post<any>(`${this.apiUrl}/logout`, {}, {withCredentials: true});
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            throw handleError(axiosError);
        }
    }
    
}