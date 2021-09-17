import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'; 
import * as api from "../api/index.js";
//import all actions from api

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    //data represents posts
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, paylod: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({type: UPDATE, payload: data});
  } catch (error) {
    console.log(error.message);

  }
}

export const deletePost = (id) => async(dispatch) => {
  try {
    await api.deletePost(id);
    //don't need response b/c we don't need one, just want to delete
    dispatch({type: DELETE, payload: id})
  } catch (error) {
    console.log(error);
  }
}

export const likePost = (id) => async(dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({type: LIKE, payload: data});
  }catch (error) {
    console.log(error);
  }
}
//fetch is asynchronous. use react thunk
//const action = { type: 'FETCH_ALL', payload: [] } => move it into try
//instead of returning action, return dispatch
//action is an object that has a type and a payload
//payload is where all posts are stored
