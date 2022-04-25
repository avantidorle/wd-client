import {useState} from "react";
import {Outlet} from "react-router-dom";
import GroupsSidebar from "./GroupsSidebar";
import PerGroupScreen from "./PerGroupScreen";
import "./css/index.css";

const Famjam = ({groups}) => {

  return (
    <div className="row mt-2">
      <div className="col-1">
         <GroupsSidebar groups={groups}/>
      </div>
      <div className="col-11">
         <Outlet/>
      </div>
    </div>
  );
};
export default Famjam;