import React from "react";
import {Link, useLocation} from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import '../../css/index.css'

const NavigationSidebar = ({gid}) => {
    const loc = useLocation();
    return(
            <div className="pt-2 list-group">
                <Link to={"/famjam/"+gid+"/settings"} className={`list-group-item ${loc.pathname === '/famjam/'+gid+"/settings" ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-cog"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Settings</div>
                </Link>
                <Link to={"/famjam/"+gid} className={`list-group-item ${loc.pathname === '/famjam/'+gid ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-house"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Home</div>
                </Link>
                <Link to={"/famjam/"+gid+"/todo"} className={`list-group-item ${loc.pathname === '/famjam/'+gid+'/todo' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i class="fa-solid fa-list-check"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Todo</div>
                </Link>
                <Link to={"/famjam/"+gid+"/expense"} className={`list-group-item ${loc.pathname === '/famjam/'+gid+'/expense' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i class="fa-solid fa-dollar-sign"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Expenses</div>
                </Link>
            </div>
    );
}
export default NavigationSidebar;
