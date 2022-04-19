import React from "react";
import {Link} from "react-router-dom";
import "../../css/profile.css"

const EditProfile = () => {
    return(
        <>
        <div>
             <div className="wd-edit-title">
                       <div className="wd-cancel-button">
                            <Link to="/famjam/group1/profile">
                            <i className="fas fa-times"/>
                            </Link>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="wd-title-text">Edit Profile</span>
                        <div className="wd-save-button">
                          <Link
                          className="btn btn-primary rounded-pill" id="save"
                          to="/famjam/group1/profile">
                           Save
                           </Link>
                        </div>
             </div>
        </div>
        <br/>
        <div>
        <img src="/images/cover.jpg" className="wd-coverimg"/>
        <img src="/images/tom.jpg" className="wd-dpimg rounded-circle img-fluid"/>
        </div>
        <div className="wd-edit-details">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <label> Name</label>
                                <input type = "text"
                                    className="form-control"
                                    defaultValue="Name"/>
                            </li>
                            <li className="list-group-item">
                                <label> Bio</label>
                                <input type = "text"
                                  className="form-control"
                                  defaultValue="Bio"/>
                            </li>
                            <li className="list-group-item">
                                <label> Location</label>
                                <input type = "text"
                                className="form-control"
                                defaultValue="Location"/>
                            </li>
                            <li className="list-group-item">
                                <label> Website</label>
                                <input type = "text"
                                className="form-control"
                                defaultValue="Website"/>
                            </li>
                            <li className="list-group-item">
                                <label> Birth date</label>
                                <input type = "text"
                                className="form-control"
                                defaultValue="Birthday"/>
                            </li>
                        </ul>
                    </div>
        </>
    );
}

export default EditProfile;