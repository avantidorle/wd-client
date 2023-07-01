import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import Popup from 'reactjs-popup';
import {Form, Button} from "react-bootstrap";
import {createGroup, signOut} from "../actions/group-action";
import '../css/index.css';


const GroupsSidebar = ({groups}) => {

    const contentStyle = {
        maxWidth: "200px",
        width: "90%"
    };
    const loc = useLocation();
    const [groupName, setGroupName] = useState("");
    const loggedInUser = sessionStorage.getItem("currentUserId");

    const dispatch = useDispatch();
    return(
        <>
            <div className="mt-3 list-group">
            <Link to="/famjam" className={`list-group-item btn ${loc.pathname === '/famjam' || loc.pathname === '/famjam/editprofile'? 'active' : ''}`}>
                <div className="wd-float-left" width="20%"><i className="fas fa-user me-3"></i><small className="wd-text"> Profile </small></div>
            </Link>
            {
                groups.map && groups.map(group =>
                    <Link to={"/famjam/GR"+group._id} className={`list-group-item btn
                    ${  loc.pathname === '/famjam/GR'+group._id ||
                        loc.pathname === '/famjam/GR'+group._id+'/settings' ||
                        loc.pathname === '/famjam/GR'+group._id+'/todo' ||
                        loc.pathname === '/famjam/GR'+group._id+'/expense'
                        ? 'active' : ''}`}>
                        <div className="wd-float-left" width="20%"><i className="fas fa-user-friends me-2"></i>
                        <small className="wd-text">{group.groupName} </small></div>
                    </Link>
                 )
            }
            <div className="list-group-item btn">
            <i className="fa fa-sign-out" aria-hidden="true" onClick={() => signOut()}>
            </i></div>
            <Popup trigger={<div className="list-group-item btn wd-float-left" width="20%"><i className="fas fa-plus"></i></div>} modal contentStyle={contentStyle}>
                <div className="bg-secondary border rounded border-light p-3" width="100px" height="100px">

                    <Form>
                        <div className="pb-2">
                            <h5 className="text-dark"> Enter group name </h5>
                        </div>
                        <div>
                            <Form.Group>
                                <Form.Control as="textarea" placeholder="Group Name" rows={1} name="title"
                                                onChange={(e)=> setGroupName(e.target.value)}/>
                            </Form.Group>
                        </div>
                        <div className="d-grid">
                             <button className="btn btn-dark mt-3 mb-2" variant="success" type="button" block
                             onClick={() => createGroup(dispatch, {groupName: groupName,
                                                                   admin: loggedInUser,
                                                                   expAdmin: loggedInUser})} >
                                 Create
                             </button>
                        </div>
                    </Form>
                </div>
            </Popup>
            </div>
       </>
    );
}
export default GroupsSidebar;
