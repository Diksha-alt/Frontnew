import axios from "axios";

export const Register = (user) => {
  // console.log("res", user);
  return {
    type: "ADD_USER",
    payload: { user },
  };
};

// export const Signin = (logindata) => {
//   console.log("login", logindata);
//   return {
//     type: "LOGIN_USER",
//     payload: { logindata },
//   };
// };

export const signup = (data) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/new/signup", data);
  dispatch(Register(res.data));
};

export const login = (data) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/new/login", data);
  console.log(res)
  // dispatch(Signin(res.data));
};
