import React from "react";
import {Link, useLocation} from "react-router-dom";
import '../css/index.css'

const GroupsSidebar = ({groups}) => {
    const loc = useLocation();
    return(
        <>
            <div className="mt-3 list-group">
            <Link to="/famjam/profile" className={`list-group-item btn ${loc.pathname === '/famjam/profile' ? 'active' : ''}`}>
                <div className="wd-float-left" width="20%"><i className="fas fa-user"></i></div>
            </Link>
            {
                groups.map && groups.map(group =>
                    <Link to={"/famjam/GR"+group._id} className={`list-group-item btn
                    ${  loc.pathname === '/famjam/GR'+group._id ||
                        loc.pathname === '/famjam/GR'+group._id+'/todo' ||
                        loc.pathname === '/famjam/GR'+group._id+'/expense'
                        ? 'active' : ''}`}>
                        <div className="wd-float-left" width="20%"><i className="fas fa-user-friends"></i></div>
                    </Link>
                 )
            }
            </div>
       </>
    );
}
export default GroupsSidebar;
