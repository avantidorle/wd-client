import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./famjam/PerGroupScreen/HomeScreen";
import TodoScreen from "./famjam/PerGroupScreen/TodoScreen";
import ExpensesScreen from "./famjam/PerGroupScreen/ExpensesScreen";
import PerGroupScreen from "./famjam/PerGroupScreen";
import Famjam from "./famjam";

function App() {
  return (
    <BrowserRouter>
        <div className="ms-4 me-4">
            <Routes>
                <Route path="famjam" element={<Famjam/>}>
                   <Route path="group1" element={<PerGroupScreen/>}>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="todo" element={<TodoScreen/>}/>
                        <Route path="expense" element={<ExpensesScreen/>}/>
                   </Route>
                   <Route path="group2" element={<PerGroupScreen/>}>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="todo" element={<TodoScreen/>}/>
                        <Route path="expense" element={<ExpensesScreen/>}/>
                   </Route>
                </Route>
            </Routes>
        </div>
    </BrowserRouter>
    );
}

export default App;
