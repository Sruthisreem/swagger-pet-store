import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useReducer,
} from "react";
import reducer from "./reducer";
import { State, Action, ContextHook } from "../interface"
// Initial State
const initialState: State = {
    isLoading: true,
    swaggerData: {
        "info": {
            "description": "This is a sample server Petstore server. "
        },
        tags: [
            
        ],
        paths: {
        }
    }
}
// Create Our context
const globalContext = createContext<{
    state: State;
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => { },
});

// Provider to wrap around our root react component
export const GlobalContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <globalContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </globalContext.Provider>
    );
};

// Custom context hook
export const useGlobalContext: ContextHook = () => {
    const { state, dispatch } = useContext(globalContext);
    return { state, dispatch };
};