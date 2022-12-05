const INIT_STATE = {
  users: [],
  carts:[]
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
        console.log(action.payload)
		// const ItemIndex = state.carts.findIndex((iteam)=>iteam.id===action.payload.id);
		// if(ItemIndex>=0){
		// 	state.carts[ItemIndex].qnty +=1
		// }
		// else{
		// 	const temp = {...action.payload,qnty:1}
		// 	return{
		// 	...state,
		// 	carts:[...state.carts,temp]
		// }};
    default:
      return state;
  }
};

export default registerReducer;
