import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./famjam/PerGroupScreen/HomeScreen";
import TodoScreen from "./famjam/PerGroupScreen/TodoScreen";
import ExpensesScreen from "./famjam/PerGroupScreen/ExpensesScreen";
import PerGroupScreen from "./famjam/PerGroupScreen";
import ProfileScreen from "./famjam/PerGroupScreen/ProfileScreen";
import EditProfile from "./famjam/PerGroupScreen/EditProfile";
import Famjam from "./famjam";
import GoogleAuthentication from "./famjam/GoogleAuthentication";
import RegistarScreen from './famjam/RegistarScreen'
import EventPosts from "./famjam/Calendar/posts/EventPosts";

function App() {
  return (
    <BrowserRouter>
        <div className="ms-4 me-4">
            <Routes>
                <Route path="/" element={ <GoogleAuthentication/>}/>
                <Route path="/login" element={ <GoogleAuthentication/>}/>

                <Route path="famjam" element={<Famjam/>}>
                   <Route path="/famjam/registar" element={ <RegistarScreen/>}/>
                   <Route path="group1" element={<PerGroupScreen/>}>
                        <Route path="profile" element={<ProfileScreen/>}/>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="todo" element={<TodoScreen/>}/>
                        <Route path="calendar" element={<EventPosts/>}/>
                        <Route path="expense" element={<ExpensesScreen/>}/>
                        <Route path="editprofile" element={<EditProfile/>}/>
                   </Route>
                   <Route path="group2" element={<PerGroupScreen/>}>
                        <Route path="profile" element={<ProfileScreen/>}/>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="todo" element={<TodoScreen/>}/>
                        <Route path="expense" element={<ExpensesScreen/>}/>
                        <Route path="editprofile" element={<EditProfile/>}/>
                   </Route>
                </Route>
            </Routes>
        </div>
    </BrowserRouter>

    );
}

export default App;
