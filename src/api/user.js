// Функция для отправки запроса на авторизацию
export async function login (email, password) {
  try {
    const response = await fetch('https://dist.nd.ru/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json()

    if (!response.ok) {
      // Если есть ошибка, возвращаем её
      throw new Error(data.message || 'Произошла ошибка')
    }

    // Возвращаем токен, если авторизация успешна
    return data.token
  } catch (error) {
    // Обработка ошибки
    throw new Error(error.message || 'Не удалось выполнить запрос')
  }
}

// Функция для получения данных с защищённого ресурса
export async function fetchProtectedData (token) {
  try {
    const response = await fetch('/api/protected-endpoint', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}` // Добавляем токен в заголовок
      }
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Ошибка доступа')
    }

    // Возвращаем данные с защищённого ресурса
    return await response.json()
  } catch (error) {
    // Обработка ошибки
    throw new Error(error.message || 'Не удалось получить доступ к защищённому ресурсу')
  }
}
