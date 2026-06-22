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

export interface PolicySection {
  heading: string;
  body: string;
  order: number;
}

export interface PolicyContent {
  key: string;
  title: string;
  lastUpdated: string;
  sections: PolicySection[];
  version: number;
}

/**
 * Fetch a public policy document (privacy_policy | terms_conditions).
 * No auth required — served from /public/cms/:key.
 */
export const getPublicPolicy = async (key: 'privacy_policy' | 'terms_conditions'): Promise<PolicyContent | null> => {
  try {
    const response = await api.get(`/public/cms/${key}`);
    return response.data?.data || null;
  } catch {
    return null;
  }
};

export default api;
