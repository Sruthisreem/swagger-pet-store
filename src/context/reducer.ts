
import {ReducerType} from '../interface'
const reducer: ReducerType = (state, action) => {
    switch (action.type) {
      case "INITIAL_DATA":
          console.log("INITIAL_DATA", action.payload)
        return { ...state, 
            isLoading:  false,
            swaggerData: action.payload }
      default:
        return state;
    }
  }
  
  export default reducer;