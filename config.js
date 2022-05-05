// @flow

const nodeEnv = process.env.NODE_ENV

const developmentURL = 'http://localhost:3000'

const getBaseURL = () => {
  return developmentURL
}

const baseURL = nodeEnv === 'test' ? developmentURL : getBaseURL()

const apiURL = `${baseURL}`

export { baseURL, apiURL }
