import { authUserApi, logoutUserApi } from 'api/user'

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

    const { data, status } = await authUserApi(type, authData)

    if (!status) {
      commit('SET_ERROR_MESSAGE', data.message)
      return status
    }

    if (data.accessToken) {
      localStorage.setItem('userToken', JSON.stringify({ token: data.accessToken }))
      commit('SET_USER_INFO', data.accessToken)
    }

    return { data, status }
  },
  async logout ({ getters, commit }) {
    const { status } = await logoutUserApi(getters.token)

    if (!status) {
      return status
    }

    commit('SET_CLEAR_DATA')

    return { status }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
