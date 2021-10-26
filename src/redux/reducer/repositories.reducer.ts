import { createReducer, createActions } from "reduxsauce";

export type IUser = {
  repositories: Array<Object> | any,
  isFetching: boolean,
  allowUser: boolean,
  myFavorites:  Array<Object> | any
};

const { Types, Creators } = createActions({
  putRepositories:["data"],
  addFavorites:["data","email"],
  addFavoritesSuccess:["data"],
  getMyFavorites:["data"],
  getMyFavoritesSuccess:["data"]
});

export const companyTypes = Types;
export default Creators;

export const INITIAL_STATE: IUser = {
  repositories: [],
  isFetching: false,
  allowUser: false,
  myFavorites: []
};

const putRepositories = (state: IUser, { data }: any) => {
  return ({
    ...state,
    repositories: data,
    isFetching: false
  })
}

const addFavorites = (state: IUser, { data }: any) => {
  return ({
    ...state,
    isFetching: true
  })
}

const addFavoritesSuccess = (state: IUser, { data }: any) => {
  return ({
    ...state,
    isFetching: false
  })
}

const getMyFavorites = (state: IUser, { data }: any) => {
  return ({
    ...state,
    isFetching: false
  })
}

const getMyFavoritesSuccess = (state: IUser, { data }: any) => {
  return ({
    ...state,
    myFavorites: data,
    isFetching: false
  })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PUT_REPOSITORIES]: putRepositories,
  [Types.ADD_FAVORITES]: addFavorites,
  [Types.ADD_FAVORITES_SUCCESS]: addFavoritesSuccess,
  [Types.GET_MY_FAVORITES]: getMyFavorites,
  [Types.GET_MY_FAVORITES_SUCCESS]: getMyFavoritesSuccess,
});
