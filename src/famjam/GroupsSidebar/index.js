import React from "react";
import {Link, useLocation} from "react-router-dom";
import '../css/index.css'

const GroupsSidebar = () => {
    const loc = useLocation();
    return(
        <>
            <div className="mt-3 list-group">
                <Link to="/famjam/group1" className={`list-group-item btn ${loc.pathname === '/famjam/group1' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fas fa-user-friends"></i></div>
                </Link>
                <Link to="/famjam/group2" className={`list-group-item btn ${loc.pathname === '/famjam/group2' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fas fa-user-friends"></i></div>
                </Link>
            </div>
       </>
    );
}
export default GroupsSidebar;
