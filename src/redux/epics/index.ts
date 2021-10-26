import { combineEpics } from "redux-observable";
import users from "./users.epic";
import repositories from "./repositories.epic";

export default combineEpics(
  users,
  repositories
)