const API_URL = process.env.VUE_APP_API_URL

const state = {
  userInfo: {
    token: null
  },
  error: null
}

const getters = {
  error (state) {
    return state.error
  },
  token (state) {
    return state.userInfo.token
  }
}

const mutations = {
  SET_USER_INFO (state, token) {
    state.userInfo.token = token
  },
  SET_ERROR_MESSAGE (state, error) {
    state.error = error
  },
  SET_CLEAR_DATA (state) {
    state.userInfo.token = null
    state.error = null
    localStorage.removeItem('userToken')
  }
}

const actions = {
  async authUser ({ commit }, { type, authData }) {
    commit('SET_ERROR_MESSAGE', null)

    const url = type === 'signup' ? `${API_URL}/api/reg` : `${API_URL}/api/auth`

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...authData
        })
      })

      const data = await response.json()

      if (!response.ok) {
        const errorMessage = Array.isArray(data.message)
          ? data.message.join('\n')
          : data.message

        commit('SET_ERROR_MESSAGE', errorMessage)
      }

      if (data.accessToken) {
        localStorage.setItem('userToken', JSON.stringify({ token: data.accessToken }))
        commit('SET_USER_INFO', data.accessToken)
      }

      return { data, status: response.ok }
    } catch (error) {
      commit('SET_ERROR_MESSAGE', 'Произошла непредвиденная ошибка')
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
