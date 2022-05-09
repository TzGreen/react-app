// @flow

export type State = {
  loading: boolean,
  error: null | string,
  isModalOpen: boolean,
}

export type AddUserPayload = {
  name: string,
  email: string,
  company: string,
}
