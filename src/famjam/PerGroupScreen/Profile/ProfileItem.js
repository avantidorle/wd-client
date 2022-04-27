import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";


const ProfileItem = ({users}) => {
const dispatch = useDispatch();
const getDate=(date)=>{
        return new Date(date).toLocaleDateString()
    }
    return(
        <>
        <div className = "heading">
            <span className="text">{users.firstName} {users.lastName}<br/></span>
        </div>
        <br/>
        <div>
        <img src= {users.bannerPicture}className="wd-coverimg"/>
        <img src={users.profilePicture} className="wd-dpimg rounded-circle img-fluid"/>
        <span className="fs-5 text ms-3">Groups: 2</span>
        <Link to="../editprofile">
        <button className="btn btn-primary rounded-pill" id="edit">Edit Profile</button>
        </Link>
        </div>
        <p>
        <span className="fs-5 text fw-bold">{users.firstName} {users.lastName}</span>

        <span className="d-block wd-lightText2">@{users.handle}</span>
        </p>
        <p className="fs-6 text1 ">{users.bio}<br />
        </p>
        <span className="wd-lightText3">
        <i className="fas fa-map-marker-alt"/>&nbsp; {users.location} &nbsp;&nbsp;
        <i className="fas fa-map-pin"/>&nbsp; {getDate(users.birthday)} &nbsp;&nbsp;
        <i className="fas fa-calendar-alt"/>&nbsp; {getDate(users.dateJoined)} &nbsp;&nbsp;
        </span>
        </>
    );
}

export default ProfileItem;