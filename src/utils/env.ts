export const getApiUrl = () => {
    if (typeof window !== 'undefined') {
        return process.env.API_BACKEND_URL || 'http://localhost:4321';
    }

    return process.env.NEXT_PUBLIC_API_BACKEND_URL || 'http://localhost:4321';
}