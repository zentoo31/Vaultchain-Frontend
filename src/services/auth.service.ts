import axios from 'axios';
import { User } from '@/interfaces/user';
import { LoginDTO } from '@/dto/loginDTO';
import { RegisterDTO } from '@/dto/registerDTO';
export class AuthService {
    private readonly apiUrl: string = process.env.API_BACKEND_URL || 'http://localhost:3000/api';

    async login(credentials: LoginDTO): Promise<User> {
        try {
            const response = await axios.post<User>(`${this.apiUrl}/auth/login`, credentials);
            return response.data;
        } catch (error) {
            console.error('Login failed:', error);
            throw new Error('Login failed. Please check your credentials and try again.');
        }
    }

    async register(userData: RegisterDTO): Promise<any> {
        try {
            const response = await axios.post<any>(`${this.apiUrl}/auth/register`, userData);
            return response.data;
        } catch (error) {
            console.error('Registration failed:', error);
            throw new Error('Registration failed. Please check your details and try again.');
        }
    }
    
}