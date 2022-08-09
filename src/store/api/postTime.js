import axios from 'axios'
import getPyKey from './getPyKey'

const postTime = async (timeJSON, ticketId) => {
  const axiosParam = {
    method: 'post',
    url: `https://relionpy.azurewebsites.net/api/AddTime?ticket_id=${ticketId}`,
    headers: {
      'x-functions-key': await getPyKey(),
      'Content-Type': 'application/json',
    },
    data: timeJSON,
  }

  const postTimeResult = await axios(axiosParam)
  return postTimeResult.data.result.id
}

export default postTime
