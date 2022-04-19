import React from "react";
import {Link} from "react-router-dom";
import "../../css/profile.css"

const ProfileScreen = () => {
    return(
        <>
        <div className = "heading">
            <span className="text">Profile Name<br/></span>
        </div>
        <br/>
        <div>
        <img src="/images/cover.jpg" className="wd-coverimg"/>
        <img src="/images/tom.jpg" className="wd-dpimg rounded-circle img-fluid"/>
        <span className="fs-5 text ms-3">Groups: 2</span>
        <Link to="../editprofile">
        <button className="btn btn-primary rounded-pill" id="edit">Edit Profile</button>
        </Link>
        </div>
        <p>
        <span className="fs-5 text fw-bold">Profile Name</span>
        <span className="d-block wd-lightText2">Handle</span>
        </p>
        <p className="fs-6 text1 ">Bio<br />
        </p>
        <span className="wd-lightText3">
        <i className="fas fa-map-marker-alt"/>&nbsp; Location &nbsp;&nbsp;
        <i className="fas fa-link"/>&nbsp; <a href="www.google.com" className="wd-profileA">website &nbsp;&nbsp;</a>
        <i className="fas fa-map-pin"/>&nbsp; Birthday &nbsp;&nbsp;
        <i className="fas fa-calendar-alt"/>&nbsp; Date Joined &nbsp;&nbsp;
        </span>
        </>
    );
}

export default ProfileScreen;