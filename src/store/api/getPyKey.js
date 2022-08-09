import axios from 'axios'

const getPyKey = async () => {
  const axiosParam = {
    method: 'get',
    url: '/api/GetPyKey',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axios(axiosParam)

  return response.data
}

export default getPyKey
