// @flow

const nodeEnv = process.env.NODE_ENV

const developmentURL = 'http://localhost:3000'

const getBaseURL = () => {
  return developmentURL
}

const baseURL = nodeEnv === 'test' ? developmentURL : getBaseURL()

const apiURL = 'https://jsonplaceholder.typicode.com'
const apiName = 'jsonplaceholder'

export { baseURL, apiURL, apiName }
