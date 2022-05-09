// @flow

type Company = {
  name: string,
}

export type User = {
  id: number,
  name: string,
  email: string,
  company: Company,
}

export type State = {
  loading: boolean,
  error: null | string,
  data: null | Array<User>,
}
