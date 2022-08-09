import axios from 'axios'
import getPyKey from './getPyKey'

const postTicket = async (ticketJSON, ticketId = '') => {
  // Update (put) if ticketId is supplied
  // Else (post) new ticket
  const method = ticketId ? 'put' : 'post'
  const query = ticketId ? `?ticket_id=${ticketId}` : ''
  const axiosParam = {
    method: method,
    // if no ticketId is supplied, it will post to /servicedesk/tickets/
    url: `https://relionpy.azurewebsites.net/api/NewTicket${query}`,
    headers: {
      'x-functions-key': await getPyKey(),
      'Content-Type': 'application/json',
    },
    data: ticketJSON,
  }

  const postTicketResult = await axios(axiosParam)

  // return ticketId
  return postTicketResult.data.result.id
}

export default postTicket
