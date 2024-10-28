import api from '@/services/api'

export const getUsers = async () => {
  try {
    const { data } = await api.get('/users')
    return data.result
  } catch (error) {
    console.log(error.message)
    throw new Error(error)

  }
}
