
const INIT_STATE = {
  carts: []
};


export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {

      case "ADD_CART":
        const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
    
        if (itemIndex >= 0) {
            const updatedCarts = [...state.carts];
            updatedCarts[itemIndex] = {
                ...updatedCarts[itemIndex],
                qnty: updatedCarts[itemIndex].qnty + 1
            };
            return {
                ...state,
                carts: updatedCarts
            };
        } else {
            const temp = { ...action.payload, qnty: 1 };
            return {
                ...state,
                carts: [...state.carts, temp]
            };
        }
    
         

      case "RMV_CART":
          const data = state.carts.filter((el)=>el.id !== action.payload); 
          // console.log(data);

          return {
              ...state,
              carts:data
          }

          case "RMV_ONE":
  const IteamIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

  if (state.carts[IteamIndex_dec].qnty >= 1) {
    const updatedCarts = [...state.carts];
    updatedCarts[IteamIndex_dec] = {
      ...updatedCarts[IteamIndex_dec],
      qnty: state.carts[IteamIndex_dec].qnty - 1,
    };

    return {
      ...state,
      carts: updatedCarts,
    };
  } else if (state.carts[IteamIndex_dec].qnty === 1) {
    const data = state.carts.filter((el) => el.id !== action.payload.id);

    return {
      ...state,
      carts: data,
    };
  }
  else {
    return state; // If quantity is already 0, just return the state as is.
  }
  default:
          return state
  }
}

    