import axios from 'axios'
import getPyKey from './getPyKey'

const getTicket = async (ticketID) => {
  // const connectionString = process.env.REACT_APP_RELIONPYKEY
  const query = ticketID ? `?ticket_id=${ticketID}` : ''
  const axiosParam = {
    method: 'get',
    url: `https://relionpy.azurewebsites.net/api/GetTicket${query}`,
    headers: {
      'x-functions-key': await getPyKey(),
      'Content-Type': 'application/json',
    },
  }
  const getTicketResult = await axios(axiosParam)
  return getTicketResult.data.result
}

export default getTicket
