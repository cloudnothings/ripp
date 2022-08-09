import axios from 'axios'
import getPyKey from './getPyKey'

const newUser = async (userJSON) => {
  // Update (put) if ticketId is supplied
  // Else (post) new ticket
  const axiosParam = {
    method: 'post',
    // if no ticketId is supplied, it will post to /servicedesk/tickets/
    url: 'https://relionpy.azurewebsites.net/api/NewUser',
    headers: {
      'x-functions-key': await getPyKey(),
      'Content-Type': 'application/json',
    },
    data: userJSON,
  }
  const poll = async ({ fn, validate, interval, maxAttempts }) => {
    let attempts = 0
    const executePoll = async (resolve, reject) => {
      const result = await fn()
      attempts++
      if (validate(result)) {
        return resolve(result)
      } else if (maxAttempts && attempts === maxAttempts) {
        return reject(new Error('Exceeded max attempts'))
      } else {
        setTimeout(executePoll, interval, resolve, reject)
      }
    }
    return new Promise(executePoll)
  }
  const pollApiFunc = async (responseUrl) => {
    let params = {
      method: 'get',
      url: responseUrl,
      headers: {
        'x-functions-key': await getPyKey(),
        'Content-Type': 'application/json',
      },
    }
    let response = await axios(params)
    
  }
  let response = await axios(axiosParam)

  // return ticketId
  return response.data.result.id
}

export default newUser
