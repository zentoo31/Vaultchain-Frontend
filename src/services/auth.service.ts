import axios, {AxiosError} from 'axios';
import { User } from '@/interfaces/user';
import { LoginDTO } from '@/dto/loginDTO';
import { RegisterDTO } from '@/dto/registerDTO';
export class AuthService {
    private readonly apiUrl: string = process.env.API_BACKEND_URL || 'http://localhost:4321';

    async login(credentials: LoginDTO): Promise<User> {
        try {
            const response = await axios.post<User>(`${this.apiUrl}/auth/login`, credentials, {withCredentials: true});
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            throw this.handleError(axiosError);
        }
    }

    async register(userData: RegisterDTO): Promise<any> {
        try {
            const response = await axios.post<any>(`${this.apiUrl}/auth/register`, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async verifyToken(cookie?: string){
        try {
            const response = await axios.get(`${this.apiUrl}/auth/verify-token`,
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
            const response =  await axios.post<any>(`${this.apiUrl}/auth/logout`, {}, {withCredentials: true});
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            throw this.handleError(axiosError);
        }
    }

    private handleError(error: AxiosError): Error {
        if (error.response) {
            const status = error.response.status;
            const data = error.response.data as { error?: string; message?: string };
            const errorMessage = data?.error || data?.message || error.message;
            return new Error(`${errorMessage}`);
        } else if (error.request) {
            return new Error('No se recibió respuesta del servidor');
        } else {
            return new Error('Error al configurar la solicitud: ' + error.message);
        }
    }
    
}