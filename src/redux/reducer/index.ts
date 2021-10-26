import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { resettableReducer } from "reduxsauce";
import { reducer as users } from "./users.reducer";
import { reducer as repositories } from "./repositories.reducer";

// listen for the action type of 'RESET', you can change this.
const resettable = resettableReducer("RESET_STATE");

export default (history: any) => combineReducers({
  router: connectRouter(history),
  users: resettable(users),
  repositories: resettable(repositories)
})