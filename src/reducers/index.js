const INIT_STATE = {
  users: [],
  items: [],
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
    case "Add_product":
      console.log("Product", { ...state, items: action.payload.item });
      return { ...state, items: action.payload.item };
    default:
      return state;
  }
};

export default registerReducer;
