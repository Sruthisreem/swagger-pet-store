export interface State {
  isLoading: boolean;
  swaggerData: SwaggerData;
  errorMessage: string;
  selectedRow: string;
}
interface SwaggerData {
  info: Info;
  tags: Tag[];
  paths: Path;
}

interface Info {
  title: string;
  description: string;
}

export interface Path {
  [key: string]: EndpointMethods;
}

export interface EndpointMethods {
  [key: string]: EndpointDetails;
}
export interface EndpointDetails {
  parameters: RequestParam[];
  responses: ResponseParam;
  operationId: string;
  summary: string;
}
interface ResponseParam {
  [key: string]: {
    description: string;
  };
}
interface RequestParam {
  description: string;
  name: string;
  required: boolean;
}
export interface Tag {
  name: string;
  description: string;
}

type ActionTypes =
  | "DATA_FETCH_SUCCESS"
  | "DATA_FETCH-ERROR"
  | "SET_SELECTED_ROW";
export interface Action {
  type: ActionTypes;
  payload?: any;
}

export type ReducerType = (state: State, action: Action) => State;

export type ContextHook = () => {
  state: State;
  dispatch: (action: Action) => void;
};
export interface TableContentType {
  description?: string;
  name?: string;
  required?: string;
  code?: string;
}
