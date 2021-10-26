import { combineEpics, ofType } from "redux-observable";
import UsersActions from '../reducer/users.reducer';
import { catchError, flatMap } from 'rxjs/operators';
import { throwError, from, concat, of } from 'rxjs';
import axios from 'axios';
import routes from '../../lib/routes';
import { push } from "connected-react-router";

const endpoint = routes.endpoints;
axios.defaults.withCredentials = true;

export const enrollmentUser = ($action: any) =>
  $action.pipe(
    ofType("ENROLLMENT_USER"),
    flatMap((action: any) => {
      const { name, lastName, cellphone, email, password } = action.data;
      return from(axios.post(
        `${endpoint.enrollmentUser.url}`,{ name, lastName, cellphone, email, password }
        ))
      .pipe(
      flatMap((res)=> {
        return concat(
          of(UsersActions.enrollmentUserSuccess(res.data)),
          of(push("/login"))
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const login = ($action: any) =>
  $action.pipe(
    ofType("LOGIN"),
    flatMap((action: any) => {
      const { email, password } = action.data;
      return from(axios.get(
        `${endpoint.login.url}`,{
          params: {
            email,
            password
          }
        }
        ))
      .pipe(
      flatMap((res: any)=> {
        return concat(
          of(UsersActions.loginSuccess(res.data)),
          of(push(res.data.allowUser ? "/my-profile" : "/login"))
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)


export default combineEpics(
  enrollmentUser,
  login
);