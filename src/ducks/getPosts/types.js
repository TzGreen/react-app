// @flow

export type Post = {
  id: number,
  title: string,
  body: string,
}

export type State = {
  loading: boolean,
  error: null | string,
  data: null | Array<Post>,
}
