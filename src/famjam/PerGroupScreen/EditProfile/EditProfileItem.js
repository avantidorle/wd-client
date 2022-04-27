import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {updateUsers} from "../../actions/users-action";


const EditProfileItem = ({users}) => {
 const [firstName, setfirstName] = useState(users.firstName);
 const [lastName, setlastName] = useState(users.lastName);
 const [bio, setBio] = useState(users.bio);
 const [location, setLocation] = useState(users.location);
 const [birthday, setBirthday] = useState(users.birthday);
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
                          to="/famjam" type="submit" block
                          onClick={() => updateUsers(dispatch, {...users,
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
        <img
                            src={users.bannerPicture}
                            alt={users.bannerPicture}
                            className="wd-coverimg"
                            alt="Cover Image"/>
        <img
                                    src={users.bannerPicture}
                                    alt={users.bannerPicture}
                                    className="wd-dpimg rounded-circle img-fluid"
                                    alt="Profile Image"/>
        </div>
        <div className="wd-edit-details">
                        <ul className="list-group" id="edit-details">
                            <li className="list-group-item">
                                <label>First Name</label>
                                <input type = "text"
                                className="form-control"
                                defaultValue={users.firstName}
                                onChange={(event)=> setfirstName(event.target.value)}/>
                            </li>
                            <li className="list-group-item">
                               <label>Last Name</label>
                               <input type = "text"
                               className="form-control"
                               defaultValue={users.lastName}
                               onChange={(event)=> setlastName(event.target.value)}/>
                            </li>
                            <li className="list-group-item">
                                <label> Bio</label>
                                <input type = "text"
                                  className="form-control"
                                  defaultValue={users.bio}
                                  onChange={(event) => setBio(event.target.value)}/>
                            </li>
                            <li className="list-group-item">
                                <label> Location</label>
                                <input type = "text"
                                className="form-control"
                                defaultValue={users.location}
                                onChange={(event) => setLocation(event.target.value)}/>
                            </li>
                            <li className="list-group-item">
                                <label> Birth date</label>
                                <input type = "Date"
                                className="form-control"
                                value={birthday.toLocaleString()}
                                onChange={(event) => setBirthday(event.target.value)}/>
                            </li>

                        </ul>
                    </div>
        </>
    );
}

export default EditProfileItem;