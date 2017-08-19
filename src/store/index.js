import {createStore} from "redux";
import reducer from "./reducer";
let initState = {};
const store = createStore(reducer, initState);

export default store;