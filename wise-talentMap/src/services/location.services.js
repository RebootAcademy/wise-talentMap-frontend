import api from '@/services/api'

export const getOutsiders = async () => {
  try {
    const { data } = await api.get('/locations?type=Resto%20del%20mundo')
    return data.result
  } catch (error) {
    console.log(error.message)
    throw new Error(error)

  }
}