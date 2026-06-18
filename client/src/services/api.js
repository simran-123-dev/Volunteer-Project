import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function postChat(message) {
  const response = await api.post('/ai/chat', { message });
  return response.data;
}

export default api;
