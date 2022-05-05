import React from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {isAdmin} from "../../RolesManager/roles-action";
import Popup from 'reactjs-popup';
import {findAllUsers} from "../../actions/users-action";

const UsersList = ({gid}) => {
    const contentStyle = {
        maxWidth: "500px",
        width: "90%"
    };
    isAdmin(gid, sessionStorage.getItem("currentUserId")).then((result)=>{
        sessionStorage.setItem("isAdmin", result);
    });

    const isGroupAdmin = sessionStorage.getItem("isAdmin");

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {findAllUsers(dispatch, gid)});

  return (
  <>
    <ul className="list-group">
      {
        users.map && users.map(user =>
        <li className="list-group-item pt-3">
            <div className="row">
                    <Popup trigger = {
                        <div className="col-10">
                            <div>{user.firstName} &nbsp; {user.lastName}</div>
                        </div>
                    }  modal contentStyle={contentStyle}>
                    <div className="p-2 bg-secondary text-dark border rounded">
                        <div>{user.firstName} &nbsp; {user.lastName}</div>
                        <div>{user.email}</div>
                    </div>
                    </Popup>
                {isGroupAdmin === "true"?
                <div className="col-2">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
                 : <></>}
            </div>
        </li>
        )
      }
    </ul>
   </>
  );
}

export default UsersList;