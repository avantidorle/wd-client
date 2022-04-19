import React from "react";
import {Link, useLocation} from "react-router-dom";
import '../../css/index.css'

const NavigationSidebar = () => {
    const loc = useLocation();
    return(
        <>
            <div className="pt-2 list-group">
                <Link to="/famjam/group1/profile" className={`list-group-item ${loc.pathname === '/famjam/group1/profile' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-user"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Profile</div>
                </Link>
                <Link to="/famjam/group1" className={`list-group-item ${loc.pathname === '/famjam/group1' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-house"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Home</div>
                </Link>
                <Link to="/famjam/group1/todo" className={`list-group-item ${loc.pathname === '/famjam/group1/todo' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i class="fa-solid fa-list-check"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Todo</div>
                </Link>
                <Link to="/famjam/group1/expense" className={`list-group-item ${loc.pathname === '/famjam/group1/expense' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i class="fa-solid fa-dollar-sign"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Expenses</div>
                </Link>
            </div>
       </>
    );
}
export default NavigationSidebar;
