import axios from 'axios'
import getPyKey from './getPyKey'

const PostTicket = async (contactJSON) => {
  const firstName = contactJSON.firstName
  const lastName = contactJSON.lastName
  const emailAddress = contactJSON.emails[0].emailAddress

  const axiosParam = {
    method: 'post',
    url: 'https://relionpy.azurewebsites.net/api/NewContact',
    headers: {
      'x-functions-key': await getPyKey(),
      'Content-Type': 'application/json',
    },
    data: contactJSON,
  }

  const newContactResult = await axios(axiosParam)

  return {
    emailAddress: emailAddress,
    id: newContactResult.data.result.id,
    name: `${firstName} ${lastName}`,
  }
}

export default PostTicket
