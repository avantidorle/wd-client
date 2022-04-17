import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import "./css/index.css";

const Famjam = () => {
  return (
   <>
    <div className="row mt-2">
      <div className="col-2">
        <NavigationSidebar/>
      </div>
      <div className="col-10">
        <Outlet/>
      </div>
    </div>
  </>
  );
};
export default Famjam;