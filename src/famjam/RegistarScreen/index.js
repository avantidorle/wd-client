import React, {useState} from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {createUser, findOneUser} from "../actions/users-action";
import {Button, Form} from "react-bootstrap";
import {getUserDetails} from "../GoogleAuthentication/userDetails";
import {Link} from "react-router-dom";
import HomeScreen from "../PerGroupScreen/HomeScreen";
import ProfileScreen from "../PerGroupScreen/ProfileScreen";
import {getToken} from "../GoogleAuthentication/tokens";

const UserList = () => {
    // const users = useSelector(state => state.users);
    // const gusers = useSelector(state => state.gusers);
    const dispatch = useDispatch();
    // const [newUser, setNewUser] = useState(null)
    const [userList, setUserList] = useState({
        userList: 'userList',
        firstName: sessionStorage.getItem('fname'),
        lastName: sessionStorage.getItem('lname')
    });
    // setUserList({...userList, email: sessionStorage.getItem("currentUserEmail")});
    return (
        <div>
            <div className="bg-gradient">
                <div><h4 className="text-center mt-3 ">Complete Profile</h4></div>
                <Form className="ps-5 pe-5">
                    <Form.Group className="mb-3" controlId="formBasicFName">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="text" placeholder="email" readOnly
                                      defaultValue={sessionStorage.getItem("currentUserEmail")}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name"
                                      defaultValue={sessionStorage.getItem("fname")}
                                      onChange={(event) => setUserList({
                                          ...userList,
                                          firstName: event.target.value,
                                      })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name"
                                      defaultValue={sessionStorage.getItem("lname")}
                                      onChange={(event) => setUserList({
                                          ...userList,
                                          lastName: event.target.value
                                      })}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter user name" onChange={(event) => setUserList({
                            ...userList,
                            handle: event.target.value
                        })}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select aria-label="Gender" onChange={(event) => setUserList({
                            ...userList,
                            gender: event.target.value
                        })}>
                            <option>Select your Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Don't wish to disclose</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter your current location"
                                      onChange={(event) => setUserList({
                                          ...userList,
                                          location: event.target.value
                                      })}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="dob">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" onChange={(event) => setUserList({
                            ...userList,
                            birthday: event.target.value
                        })}/>
                    </Form.Group>
                    <Link className="btn btn-primary rounded-pill float-end"
                          to="/famjam"
                          onClick={() => createUser(dispatch, userList, sessionStorage.getItem("currentUserEmail"))}> Done
                    </Link>

                </Form>
            </div>
        </div>
    );
}

export default UserList;