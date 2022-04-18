import {Outlet} from "react-router-dom";
import GroupsSidebar from "./GroupsSidebar";
import "./css/index.css";

import expenseReducer from "./reducers/expense-reducer";
import todoReducer from "./reducers/todo-reducer";

import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
  expense: expenseReducer,
  todo: todoReducer
});

const store = createStore(reducer);
const Famjam = () => {
  return (
   <Provider store={store}>
    <div className="row mt-2">
      <div className="col-1">
        <GroupsSidebar/>
      </div>
      <div className="col-11">
        <Outlet/>
      </div>
    </div>
  </Provider>
  );
};
export default Famjam;