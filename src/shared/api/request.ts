const API_URL = import.meta.env.VITE_API_URL

const getAuthHeader = (token?: string): Record<string, string> => 
  token ? { Authorization: `Bearer ${token}` } : {}

export const get = async <T>(endpoint: string, token?: string): Promise<T> => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      ...getAuthHeader(token)
    }
  })
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}

export const post = async <T>(endpoint: string, body: unknown, token?: string): Promise<T> => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(token)
    },
    body: JSON.stringify(body)
  })
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}

export const put = async <T>(endpoint: string, body: unknown, token?: string): Promise<T> => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(token)
    },
    body: JSON.stringify(body)
  })
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}

export const del = async <T>(endpoint: string, token?: string): Promise<T> => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'DELETE',
    headers: {
      ...getAuthHeader(token)
    }
  })
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}