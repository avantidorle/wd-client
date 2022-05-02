import {useState} from "react";
import {Outlet, useOutletContext, useLocation} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import "../css/index.css";
import EventPosts from "../Calendar/posts/EventPosts";

const PerGroupScreen = ({gid}) => {

  return (
   <>
    <div className="row mt-2">
      <div className="col-2">
        <NavigationSidebar gid={gid}/>
      </div>
      <div className="col-10">
        <Outlet/>
      </div>
    </div>
  </>
  );
};
export default PerGroupScreen;