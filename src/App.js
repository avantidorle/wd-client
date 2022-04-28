import React, {useState} from 'react'
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {findAllGroups} from "./famjam/actions/group-action";
import HomeScreen from "./famjam/PerGroupScreen/HomeScreen";
import TodoScreen from "./famjam/PerGroupScreen/TodoScreen";
import ExpensesScreen from "./famjam/PerGroupScreen/ExpensesScreen";
import PerGroupScreen from "./famjam/PerGroupScreen";
import ProfileScreen from "./famjam/PerGroupScreen/ProfileScreen";
import EditProfile from "./famjam/PerGroupScreen/EditProfile";
import GroupSettings from "./famjam/PerGroupScreen/GroupSettings";
import Famjam from "./famjam";
import GoogleAuthentication from "./famjam/GoogleAuthentication";
import OurStory from "./famjam/OurStory";
import Team from "./famjam/Team";
import RegistarScreen from './famjam/RegistarScreen'

function App() {
  const groups = useSelector(state => state.group);
  const dispatch = useDispatch();
  useEffect(() => {findAllGroups(dispatch)});
  return (

    <BrowserRouter>
        <div className="ms-4 me-4">
            <Routes>

                 <Route path="/" element={ <GoogleAuthentication/>}/>
                <Route path="/login" element={ <GoogleAuthentication/>}/>
                <Route path="/ourstory" element={ <OurStory/>}/>
                <Route path="/team" element={ <Team/>}/>
                <Route path="/famjam" element={<Famjam groups={groups}/>}>
                <Route path="/famjam" element={<ProfileScreen/>}/>
                <Route path="/famjam/registar" element={ <RegistarScreen/>}/>

                <Route path="/famjam/editprofile" element={<EditProfile/>}/>
                    {
                        groups.map && groups.map(group =>
                        <>
                            <Route path={"/famjam/GR"+group._id} element={<PerGroupScreen gid={"GR"+group._id}/>}>
                                <Route path={"/famjam/GR"+group._id+"/settings"} element={<GroupSettings group={group}/>}/>
                                <Route path={"/famjam/GR"+group._id} element={<HomeScreen gid={group._id}/>}/>
                                <Route path={"/famjam/GR"+group._id+"/todo"} element={<TodoScreen gid={group._id}/>}/>
                                <Route path={"/famjam/GR"+group._id+"/expense"} element={<ExpensesScreen gid={group._id}/>}/>
                            </Route>
                        </>)
                    }
                </Route>
            </Routes>
        </div>
    </BrowserRouter>

    );
}

export default App;
