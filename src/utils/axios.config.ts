import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://linked-to-home-api.applore.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface PilotProgramSubmission {
  fullName: string;
  schoolName: string;
  email: string;
}

/**
 * Submit pilot program registration form.
 * Calls POST /admin/pilot-program/submit-form
 */
export const submitPilotProgramForm = async (formData: PilotProgramSubmission) => {
  const response = await api.post('/admin/pilot-program/submit-form', formData);
  return response.data;
};

export default api;
