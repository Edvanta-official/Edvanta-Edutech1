const BASE_URL = '/api';

export const apiRequest = async (endpoint, method = 'GET', body = null, customHeaders = {}) => {
  const token = localStorage.getItem('edvanta_token');
  const headers = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API error with status ${response.status}`);
  }

  return response.json();
};
