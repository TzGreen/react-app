// @flow

import { addPostSuccess } from 'ducks/addPost/actions'
import { deletePostSuccess } from 'ducks/deletePost/actions'
import { editPostSuccess } from 'ducks/editPost/actions'
import { handleActions } from 'redux-actions'
import { getPostsFailure, getPostsRequest, getPostsSuccess } from './actions'

import type { State } from './types'

const initialState: State = {
  loading: false,
  error: null,
  data: null,
  userId: null,
}

const getPostsReducer = handleActions(
  {
    [getPostsRequest]: () => ({
      loading: true,
      error: null,
    }),

    [getPostsFailure]: (action) => ({
      loading: false,
      error: action.payload,
    }),

    [getPostsSuccess]: (state: State, action) => ({
      loading: false,
      data: action.payload.data,
      userId: action.payload.userId,
    }),

    [addPostSuccess]: (state: State, action) => {
      const { userId, id, ...newPost } = action.payload
      if (userId === state.userId) {
        return {
          ...state,
          data: [...state.data, newPost],
        }
      }
      return state
    },

    [editPostSuccess]: (state: State, action) => {
      const { userId, id, ...newPost } = action.payload
      if (userId === state.userId) {
        return {
          ...state,
          data: state.data.map((post) => {
            if (post.id === id) {
              return {
                ...post,
                ...newPost,
              }
            }
            return post
          }),
        }
      }
      return state
    },

    [deletePostSuccess]: (state: State, action) => {
      const { userId, id } = action.payload
      if (userId === state.userId) {
        return {
          ...state,
          data: state.data.filter((post) => post.id !== id),
        }
      }
      return state
    },
  },
  initialState
)

export default getPostsReducer
