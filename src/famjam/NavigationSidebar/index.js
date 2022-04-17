import React from "react";
import {Link, useLocation} from "react-router-dom";
import '../css/index.css'

const NavigationSidebar = () => {
    const loc = useLocation();
    return(
        <>
            <div className="pt-2 list-group">
                <Link to="/famjam" className={`list-group-item ${loc.pathname === '/famjam' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-house"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Home</div>
                </Link>
                <Link to="/famjam/todo" className={`list-group-item ${loc.pathname === '/famjam/todo' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fa fa-hashtag"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Todo</div>
                </Link>
                <Link to="/famjam/expense" className={`list-group-item ${loc.pathname === '/famjam/expense' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fa fa-hashtag"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Expenses</div>
                </Link>
            </div>
       </>
    );
}
export default NavigationSidebar;
