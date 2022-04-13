
import {ReducerType, getFilteredData} from '../interface'
const reducer: ReducerType = (state, action) => {
    switch (action.type) {
      case "UPDATE_DATA":
          console.log("UPDATE_DATA", action.payload)
        return { ...state, 
            isLoading:  false,
            swaggerData:  getFilteredData(action.payload) }
      default:
        return state;
    }
  }
  
  export default reducer;