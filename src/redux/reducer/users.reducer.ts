import { createReducer, createActions } from "reduxsauce";

export type IUser = {
  name: string,
  lastName: string,
  cellphone: number | null,
  email: string,
  password: string,
  isFetching: boolean,
  allowUser: boolean
};

type Payload = {
  data: IUser;
};

const { Types, Creators } = createActions({
  enrollmentUser: ["data"],
  enrollmentUserSuccess: ["data"],
  login:["data"],
  loginSuccess: ["data"],
  closeSession: ["allowUser"]
});

export const companyTypes = Types;
export default Creators;

export const INITIAL_STATE: IUser = {
  name: "",
  lastName: "",
  cellphone: null,
  email: "",
  password: "",
  isFetching: false,
  allowUser: false
};

const enrollmentUser = (state: IUser, { data }: Payload) => ({
  ...state,
  ...data,
  isFetching: true
});

const enrollmentUserSuccess = (state: IUser, { data }: Payload) => {
  return ({
    ...state,
    ...data,
    isFetching: false
  })
}

const login = (state: IUser, { data }: Payload) => ({
  ...state,
  ...data,
  isFetching: true
});

const loginSuccess = (state: IUser, { data }: Payload) => ({
  ...state,
  allowUser: data.allowUser,
  isFetching: false
});

const closeSession = (state: IUser, { allowUser }: any) => {
  return ({
    ...state,
    allowUser,
    isFetching: false
  })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ENROLLMENT_USER]: enrollmentUser,
  [Types.ENROLLMENT_USER_SUCCESS]: enrollmentUserSuccess,
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.CLOSE_SESSION]: closeSession
});
