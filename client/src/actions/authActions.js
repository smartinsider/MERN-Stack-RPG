import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  UPDATE_CURRENT_USER,
} from "./types";

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login")) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      //console.log(res);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const updateCurrentUser = (decoded) => {
  return {
    type: UPDATE_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Log user out
export const logoutUser = () => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  return setCurrentUser({});
};

export const saveUser = (userData) => {
  let data = {
    userData: userData,
  };
  axios({
    method: "post",
    url: "/api/saveUser",
    headers: { "Content-Type": "application/json" },
    data: data,
  })
    .then(function(response) {
      //console.log(response);
    })
    .catch(function(error) {
      //console.log(error);
    });
};

// Figure this out!
export const saveLocalUser = (userData) => {
  return updateCurrentUser(userData);
};

export const getCharacterData = (userData, dispatch) => {
  //console.log(userData);
  axios
    .get("/api/getUser", {
      params: {
        data: userData,
      },
    })
    .then((res) => {
      if (res.data.user !== null && !checkObj(userData.character)) {
        userData.character = res.data.user.character;
      }
      //console.log(userData);
      return new Promise((resolve, reject) => {
        dispatch({
          type: UPDATE_CURRENT_USER,
          payload: userData,
        });
        resolve();
      });
    });
};

const checkObj = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return true;
  }
  return false;
};
