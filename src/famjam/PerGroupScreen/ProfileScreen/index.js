import "../../css/profile.css"
import ActivityStream from "./ActivityStream";
import React, {useEffect, useState} from "react";
import {findAllPostsByUser, findUserById} from "../../services/user-service";
import {Link} from "react-router-dom";

const ProfileScreen = () => {
    let [currentUser, setUser] = useState({currentUser: "newuser"});
    useEffect( () => {
            // console.log(sessionStorage.getItem("currentUserId"))
            findUserById(sessionStorage.getItem("currentUserId")).then(r => {
                console.log("response is", r);
                setUser(r)
            })}, [],
    );

    const getDate=(date)=>{
        return new Date(date).toLocaleDateString()
    }
  return(
        <>
            <div className="bg-gradient p-2 rounded">
                <div className = "heading">
                    <span className="text">{currentUser.firstName} {currentUser.lastName}<br/></span>
                </div>
                <br/>
                <div>
                    <img src= {currentUser.bannerPicture}className="wd-coverimg"/>
                    <img src={currentUser.profilePicture} className="wd-dpimg rounded-circle img-fluid"/>
                    <span className="fs-5 text ms-3">Groups: 2</span>
                    <Link to="../editprofile">
                        <button className="btn btn-primary rounded-pill" id="edit">Edit Profile</button>
                    </Link>
                </div>
                <p>
                    <span className="fs-5 text fw-bold">{currentUser.firstName} {currentUser.lastName}</span>

                    <span className="d-block wd-lightText2">@{currentUser.handle}</span>
                </p>
                <p className="fs-6 text1 ">{currentUser.bio}
                </p>
                <span className="wd-lightText3">
                <i className="fas fa-map-marker-alt"/>&nbsp; {currentUser.location} &nbsp;&nbsp;
                    <i className="fas fa-map-pin"/>&nbsp; {getDate(currentUser.birthday)} &nbsp;&nbsp;
                    <i className="fas fa-calendar-alt"/>&nbsp; {getDate(currentUser.dateJoined)} &nbsp;&nbsp;
        </span>
            </div>

            <div className='Activity mt-1'>
                <h4 className="mt-4 text">Posts By You</h4>
                <ActivityStream/>
            </div>
        </>
  )
}
export default ProfileScreen;