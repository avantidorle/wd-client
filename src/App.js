import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./famjam/HomeScreen";
import TodoScreen from "./famjam/TodoScreen";
import ExpensesScreen from "./famjam/ExpensesScreen";
import Famjam from "./famjam";

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="famjam" element={<Famjam/>}>
                   <Route index element={<HomeScreen/>}/>
                   <Route path="todo" element={<TodoScreen/>}/>
                   <Route path="expense" element={<ExpensesScreen/>}/>
                </Route>
            </Routes>
        </div>
    </BrowserRouter>
    );
}

export default App;
