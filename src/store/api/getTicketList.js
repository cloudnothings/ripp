import axios from 'axios'

const getTicketList = async (filter) => {
  const getTicketListResult = await axios({
    method: 'post',
    baseURL: window.location.origin,
    url: '/api/GetTicketList',
    headers: {
      'Content-Type': 'application/json',
    },
    data: filter,
  })
  return getTicketListResult.data.result
}

export default getTicketList
