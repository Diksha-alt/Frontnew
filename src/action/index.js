import axios from "axios";

export const Register = (user) => {
  // console.log("res", user);
  return {
    type: "ADD_USER",
    payload: { user },
  };
};

<<<<<<< HEAD
export const Signin = (logindata) => {
  // console.log("login", logindata);
=======
export const ADD = (item)=>{
	return{
		type:"Add_product",
		payload:{item}
	}
}

export const Signin = (logindata) => {
  console.log("login", logindata);
>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768
  return {
    type: "LOGIN_USER",
    payload: { logindata },
  };
};

<<<<<<< HEAD
export const ADD = (item) => {
  console.log("login", item);
  return {
    type: "Add_product",
    payload: { item },
  };
};

export const addproduct = () => async (dispatch) => {
  // console.log(data);
  const res = await axios.get("http://localhost:5000/new/addproduct");
  // console.log(res);
  dispatch(ADD(res.data));
};
=======
export const addproduct = (cartdata) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/new/addproduct", data);
  dispatch(ADD(res.data));
  // console.log("addto cart")
};

>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768

export const signup = (data) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/new/signup", data);
  dispatch(Register(res.data));
};

export const login = (data) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/new/login", data);
<<<<<<< HEAD
  console.log(res);
=======
  // console.log(res)
>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768
  dispatch(Signin(res.data));
};
