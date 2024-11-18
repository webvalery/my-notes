const API_URL = process.env.VUE_APP_API_URL

export async function authUserApi (type, authData) {
  const url = type === 'signup' ? `${API_URL}/api/reg` : `${API_URL}/api/auth`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...authData })
    })

    const data = await response.json()

    return { data, status: response.ok }
  } catch (error) {
    return { data: null, status: false }
  }
}

export async function logoutUserApi (token) {
  try {
    const response = await fetch(`${API_URL}/api/auth`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    return { status: response.ok }
  } catch (error) {
    return { status: false }
  }
}

export async function loadUserInfoApi (token) {
  try {
    const response = await fetch(`${API_URL}/api/auth`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()

    return { data, status: response.ok }
  } catch (error) {
    return { data: null, status: false }
  }
}
