const API_URL = process.env.VUE_APP_API_URL

export async function loadNotesApi (token) {
  try {
    const response = await fetch(`${API_URL}/api/notes`, {
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

export async function sendNoteApi (token, noteData) {
  try {
    const response = await fetch(`${API_URL}/api/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ ...noteData })
    })

    const data = await response.json()

    return { data, status: response.ok }
  } catch (error) {
    return { data: null, status: false }
  }
}

export async function deleteNoteApi (token, id) {
  try {
    const response = await fetch(`${API_URL}/api/notes/${id}`, {
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
