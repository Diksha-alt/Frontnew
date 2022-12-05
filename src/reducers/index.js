const INIT_STATE = {
  users: [],
<<<<<<< HEAD
  items: [],
=======
  carts:[]
>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768
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
<<<<<<< HEAD
    case "Add_product":
      console.log("Product", { ...state, items: action.payload.item });
      return { ...state, items: action.payload.item };
=======

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
>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768
    default:
      return state;
  }
};

export default registerReducer;
