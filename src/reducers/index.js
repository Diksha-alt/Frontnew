const INIT_STATE = {
  users: [],
};

const registerReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("signup", action.payload.user);
    // return{
    // 	...state,
    // 	user:[...state.users,action.payload.user]
    // }
    case "LOGIN_USER":
      console.log("login", action.payload.logindata);
    default:
      return state;
  }
};

export default registerReducer;
