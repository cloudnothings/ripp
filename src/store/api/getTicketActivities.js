import axios from 'axios'
import getPyKey from './getPyKey'

const getTicketActivities = async (ticketId = '') => {
  const query = ticketId ? `?ticket_id=${ticketId}` : ''
  const axiosParam = {
    method: 'get',
    url: `https://relionpy.azurewebsites.net/api/GetTicketActivities${query}`,
    headers: {
      'x-functions-key': await getPyKey(),
      'Content-Type': 'application/json',
    },
  }
  console.log('Ticket Id: ')
  console.log(ticketId)
  const getTicketActivitiesResult = await axios(axiosParam)
  return getTicketActivitiesResult.data.result
}

export default getTicketActivities
