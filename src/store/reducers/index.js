import { combineReducers } from "redux";
import search from "./searchReducer";
import workplace from "./workplaceReducer";
import work from "./workReducer";
import footer from "./footerReducer";
import town from "./townReducer";

const rootReducer = combineReducers({
  search,
  workplace,
  work,
  footer,
  town,
});

export default rootReducer;
