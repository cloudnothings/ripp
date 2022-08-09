import axios from 'axios'
import getPyKey from './getPyKey'

const getContactList = async (clientID = '') => {
  const query = clientID ? `?client_id=${clientID}` : ''
  const axiosParam = {
    method: 'get',
    url: `https://relionpy.azurewebsites.net/api/GetContactList${query}`,
    headers: {
      'x-functions-key': await getPyKey(),
      'Content-Type': 'application/json',
    },
  }
  const getContactListResult = await axios(axiosParam)
  return getContactListResult.data

  // //reformat array for MUI dropdown
  // const contactList = result.map((item) => {
  //   return { label: item.name, id: item.id, email: item.emailAddress }
  // })
  // return contactList
}

export default getContactList
