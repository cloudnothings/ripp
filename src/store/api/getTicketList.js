import axios from 'axios'
import getPyKey from './getPyKey'

const getTicketList = async (filter) => {
  const axiosParam = {
    method: 'post',
    url: '/api/GetTicketList',
    headers: {
      'Content-Type': 'application/json',
    },
    data: filter,
  }
  const getTicketListResult = await axios(axiosParam)
  return getTicketListResult.data.result
}

export default getTicketList
