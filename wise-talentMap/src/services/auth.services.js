import api from './api'
export const login = async (email, password) => {
  try {
    console.log('email', email)
    const {data} = await api.post('/auth/login', {email, password})
    return data
  } catch (error) {
    console.log(error.message)
    throw new Error(error)
  }
}
