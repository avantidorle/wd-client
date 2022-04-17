import {Outlet} from "react-router-dom";
import GroupsSidebar from "./GroupsSidebar";
import "./css/index.css";

const Famjam = () => {
  return (
   <>
    <div className="row mt-2">
      <div className="col-1">
        <GroupsSidebar/>
      </div>
      <div className="col-11">
        <Outlet/>
      </div>
    </div>
  </>
  );
};
export default Famjam;