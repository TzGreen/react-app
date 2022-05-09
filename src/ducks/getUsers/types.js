// @flow

export type User = {
  id: number,
  name: string,
  email: string,
  company: string,
}

export type State = {
  loading: boolean,
  error: null | string,
  data: null | Array<User>,
}
