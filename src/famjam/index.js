import {Outlet} from "react-router-dom";
import GroupsSidebar from "./GroupsSidebar";
import "./css/index.css";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import expenseReducer from "./reducers/expense-reducer";
import todoReducer from "./reducers/todo-reducer";

const reducer = combineReducers({
  expense: expenseReducer,
  section: todoReducer
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