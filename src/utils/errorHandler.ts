import { AxiosError } from "axios";
export function handleError(error: AxiosError): Error {
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