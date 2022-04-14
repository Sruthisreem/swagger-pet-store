export interface State {
    isLoading: boolean;
    swaggerData: SwaggerData;
}
interface SwaggerData {
    info: any,
    tags: Tag[],
    paths: Path
}
export interface Path{
    [key: string]: EndpointMethods;
}
export interface EndpointMethods {
    [key: string]: EndpointDetails;
}
export interface EndpointDetails {
    parameters: RequestParam[],
    responses: ResponseParam
}
interface ResponseParam {
    [key: string]: {
        description: string
    }
}
interface RequestParam {
    description: string
    name: string
    required: boolean
}
export interface Tag {
    name: string,
    description: string
}
type ActionTypes = 'INITIAL_DATA' ;
export interface Action {
    type: ActionTypes;
    payload?: any;
}
export type ReducerType = (state: State, action: Action) => State;

export type ContextHook = () => {
    state: State,
    dispatch: (action: Action) => void;
}

