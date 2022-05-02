import React from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import Popup from 'reactjs-popup';
import {Form, Button} from "react-bootstrap";
import UsersList from "./UsersList";
import {deleteGroup} from "../../actions/group-action";
import {addUserToGroup} from "../../actions/group-action";
import {useState} from "react";
import {findAllUsers} from "../../actions/users-action";

const GroupSettings = ({group}) => {

    const contentStyle = {
        maxWidth: "200px",
        width: "90%"
    };

    const users = useSelector(state => state.users);
    const [userItem, setUser] = useState({email: ""});
    const dispatch = useDispatch();
    useEffect(() => {findAllUsers(dispatch, group._id)});
    return(
        <>
            <div className="ms-5 me-5">
                <form>
                  <fieldset>
                    <legend>Edit group properties</legend>
                    <div className="form-group row">
                      <div class="form-group">
                        <label class="col-form-label mt-4" for="inputDefault">Group name</label>
                        <input type="text" class="form-control" placeholder="Group name" defaultValue={group.groupName} id="inputDefault"/>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="expenseAdmin" className="form-label mt-4">Select expense admin</label>
                      <select className="form-select" id="expenseAdmin">
                        {users.map && users.map(user =>
                            <option id={user._id}>{user.firstName+" "+user.lastName}</option>
                        )}
                      </select>
                    </div>

                    <div class="form-group">
                          <label for="addUser" class="form-label mt-4">Add user</label>
                          <input type="email" class="form-control" id="addUser" aria-describedby="addUser" placeholder="Enter email of member to add in this group"
                          onChange={(event) => setUser({email: event.target.value})} />
                          <span className="btn rounded btn-success" onClick={() => addUserToGroup(dispatch, userItem, group._id)}>Add User</span>
                    </div>
                  </fieldset>
                </form>
            <div className="mt-5">
            <h4>Group members: </h4>
                <UsersList gid={group._id}/>
            </div>

            <Link to={"/famjam/GR"+group._id}>
                <button className="btn btn-success me-4" type="button"><strong>Save</strong></button>
            </Link>

                <Popup trigger={<span className="btn btn-primary">Delete group</span>} modal contentStyle={contentStyle}>
                <div className="bg-secondary border border-light rounded ps-3">
                <p className="text-dark">Are you sure you want to delete {group.groupName}?</p>
                <Link to="/famjam">
                    <button className="btn btn-success border-dark ms-4 mb-2" type="button" onClick={() => deleteGroup(dispatch, group._id)}>
                        <strong>Yes</strong>
                    </button>
                 </Link>
                </div>
                </Popup>
            </div>
        </>
    );
}

export default GroupSettings;
