import { combineReducers } from "redux";
import { listReducer } from "./list";
import { noteReducer } from "./note";
import { addReducer } from "./addNote";
import { deleteReducer } from "./delete";

export default combineReducers({
  list: listReducer,
  note: noteReducer,
  add: addReducer,
  delete: deleteReducer
});
