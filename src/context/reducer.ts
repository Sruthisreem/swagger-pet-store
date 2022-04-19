
import { ReducerType } from '../interface'
const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case "DATA_FETCH_SUCCESS":
      console.log("DATA_FETCH_SUCCESS", action.payload)
      return {
        ...state,
        isLoading: false,
        swaggerData: action.payload
      }

    case "DATA_FETCH-ERROR":
      console.log("DATA_FETCH-ERROR", action.payload)
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default reducer;