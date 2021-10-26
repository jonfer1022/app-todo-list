import { combineEpics, ofType } from "redux-observable";
import RepositoriesActions from '../reducer/repositories.reducer';
import { catchError, flatMap } from 'rxjs/operators';
import { throwError, from, concat, of } from 'rxjs';
import axios from 'axios';
import routes from '../../lib/routes';

const endpoint = routes.endpoints;
axios.defaults.withCredentials = true;

const getRep = {
  query: `
  query{
    repositoryOwner (login: "facebook"){
      repositories(first: 10, orderBy: {field:NAME, direction:ASC}) {
        pageInfo {hasNextPage, endCursor}
        nodes {
          name
          url
          isPrivate
          owner {
            login
          }
          defaultBranchRef {
            name
          },
          id,
          description
        }
      }
    }
  }
  `
}

export const getRepositories = ($action: any) =>
  $action.pipe(
    ofType("GET_REPOSITORIES"),
    flatMap(() => {
      console.log(process.env.REACT_APP_TOKEN)
      return from(fetch(`https://api.github.com/graphql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + process.env.REACT_APP_TOKEN,
        },
        body: JSON.stringify(getRep),
      }))
      .pipe(
      flatMap((res)=> {
        let result = Promise.resolve(res.text());
        console.log(result)
        return concat(
          of(RepositoriesActions.getRepositoriesSuccess(result)),
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const addFavorites = ($action: any) =>
  $action.pipe(
    ofType("ADD_FAVORITES"),
    flatMap((action: any) => {
      return from(axios.post(
        `${endpoint.addFavorites.url}`,{ favorites: action.data, email: action.email }
        ))
      .pipe(
      flatMap((res)=> {
        return concat(
          of(RepositoriesActions.addFavoritesSuccess(res.data))
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const getMyFavorites = ($action: any) =>
  $action.pipe(
    ofType("GET_MY_FAVORITES"),
    flatMap((action: any) => {
      return from(axios.get(
        `${endpoint.getMyFavorites.url}`,{
          params: {
            email: action.data
          }
        }
        ))
      .pipe(
      flatMap((res)=> {
        return concat(
          of(RepositoriesActions.getMyFavoritesSuccess(res.data))
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
  getRepositories,
  addFavorites,
  getMyFavorites
);