export const API_URL = import.meta.env.VITE_API_BASE_URL as string;
export const APP_NAME = import.meta.env.VITE_APP_NAME as string;
export const APP_URL = import.meta.env.VITE_APP_URL as string;

console.log('Mode:', import.meta.env.MODE);
console.log('API URL:', API_URL);
