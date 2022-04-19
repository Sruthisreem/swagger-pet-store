import { ReducerType } from "../interface/interfaces";
const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        swaggerData: action.payload,
      };

    case "DATA_FETCH-ERROR":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
