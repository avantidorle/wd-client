import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {updateUsers} from "../../actions/users-action";
import {findUserById} from "../../services/user-service";


const Index = () => {
    let [currentUser, setUser] = useState({currentUser: "newuser"});
        useEffect( () => {
                // console.log(sessionStorage.getItem("currentUserId"))
                findUserById(sessionStorage.getItem("currentUserId")).then(r => {
                    console.log("response is", r);
                    setUser(r)
                })}, [],
        );

     const [firstName, setfirstName] = useState(currentUser.firstName);
     const [lastName, setlastName] = useState(currentUser.lastName);
     const [bio, setBio] = useState(currentUser.bio);
     const [location, setLocation] = useState(currentUser.location);
     const [birthday, setBirthday] = useState(currentUser.birthday);
     const getDate=(birthday)=>{
        return new Date(birthday).toLocaleDateString()
     }
 const dispatch = useDispatch();
    return(
        <>
        <div>
             <div className="wd-edit-title">
                       <div className="wd-cancel-button">
                            <Link to="/famjam">
                            <i className="fas fa-times"/>
                            </Link>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="wd-title-text">Edit Profile</span>

                        <Link
                          className="btn btn-primary rounded-pill" id="save"
                          to="/famjam" type="submit"
                          onClick={() => updateUsers(dispatch, {...currentUser,
                          firstName: firstName,
                          lastName: lastName,
                          bio: bio,
                          location: location,
                          birthday: birthday})}>
                           Save
                           </Link>

             </div>
        </div>
        <br/>
        <div>
        <img src={currentUser.bannerPicture} className="wd-coverimg"/>
        <img src={currentUser.profilePicture} className="wd-dpimg rounded-circle img-fluid"/>
        </div>
        <div className="wd-edit-details">
                        <ul className="list-group" id="edit-details">
                            <li className="list-group-item">
                                <label>First Name</label>
                                <input type = "text"
                                className="form-control"
                                defaultValue={currentUser.firstName}
                                onChange={(event)=> setfirstName(event.target.value)}/>
                            </li>
                            <li className="list-group-item">
                               <label>Last Name</label>
                               <input type = "text"
                               className="form-control"
                               defaultValue={currentUser.lastName}
                               onChange={(event)=> setlastName(event.target.value)}/>
                            </li>
                            <li className="list-group-item">
                                <label> Bio</label>
                                <input type = "text"
                                  className="form-control"
                                  defaultValue={currentUser.bio}
                                  onChange={(event) => setBio(event.target.value)}/>
                            </li>
                            <li className="list-group-item">
                                <label> Location</label>
                                <input type = "text"
                                className="form-control"
                                defaultValue={currentUser.location}
                                onChange={(event) => setLocation(event.target.value)}/>
                            </li>
                            {/*<li className="list-group-item">*/}
                            {/*    <label> Birth date</label>*/}
                            {/*    <input type = "Date"*/}
                            {/*    className="form-control"*/}
                            {/*    value={birthday.toLocaleString()}*/}
                            {/*    onChange={(event) => setBirthday(event.target.value)}/>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
        </>
    );
}

export default Index;