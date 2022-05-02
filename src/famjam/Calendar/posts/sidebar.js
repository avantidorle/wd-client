import React from "react";
import EventPosts from "./EventPosts";

const SideBar = () => {
    return(<div className=" fj-body-bg-slate container">
        <div className="row">
            <div className="col-1">
                Groups
            </div>
            <div className="col-2">
                NavBar
            </div>
            <div className="col-7">
                Timeline or other content
            </div>
            <div className="col-2 fj-flex-cards">
                Google Calendar
                <EventPosts/>
            </div>
        </div>
    </div>
    );
}
export default SideBar;