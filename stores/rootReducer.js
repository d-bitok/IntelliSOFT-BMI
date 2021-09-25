import { combineReducers } from "redux";

import tabReducer from "./tabs/tabReducer";
import themeReducer from "./theme/themeReducer";

export default combineReducers({
    tabReducer,
    themeReducer
})