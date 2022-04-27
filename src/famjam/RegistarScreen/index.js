import React, {useState} from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {createUser, findOneUser} from "../actions/users-action";
import {Button, Form} from "react-bootstrap";
import {getUserDetails} from "../GoogleAuthentication/userDetails";
import {Link} from "react-router-dom";
import HomeScreen from "../PerGroupScreen/HomeScreen";

const UserList = () => {
    const users = useSelector(state => state.users);
    const gusers = useSelector(state => state.gusers);
    const dispatch = useDispatch();


    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setEmail] = useState(gusers.email);
    let gmail = "abc"

    const [userList, setUserList] = useState({users:'New User'});
    let newUser = true;

    useEffect(() => {getUserDetails().then(r =>{
        console.log(r)
        gmail = r.email;
        setEmail(r.email);
        setfname(r.given_name);
        setlname(r.family_name);
        findOneUser(dispatch,email).then(r=>{
            console.log(r);
            if(r===undefined){
                newUser = true;
            }
            console.log("user found")
        });
    })});
    console.log(gusers);
    console.log(users);
    console.log("Email is "  +email);

    console.log(users);
    if(users !== null) {
        if( users.length !== 0){
            console.log(users.email);
            console.log(email)
            if(users.email === email){
                newUser=false;
            }
        }
    }

    return (
        <div>
        { newUser ? (
            <div className="bg-gradient">
                <div> <h4 className="text-center mt-3 ">Complete Profile</h4></div>
                <Form className="ps-5 pe-5">
                    <Form.Group className="mb-3" controlId="formBasicFName">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="text" placeholder="email" readOnly defaultValue={email}
                                      onChange={(event) => setUserList({
                                          ...userList,
                                          email: event.target.value,
                                      })}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicFName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" defaultValue={fname}
                        onChange={(event) => setUserList({
                        ...userList,
                        firstName: event.target.value,
                    })}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" defaultValue={lname}
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
                        <Form.Control type="text" placeholder="Enter your current location" onChange={(event) => setUserList({
                            ...userList,
                            location: event.target.value
                        })}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="dob">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" onChange={(event) => setUserList({
                            ...userList,
                            birthday: event.target.value
                        })} />
                    </Form.Group>
                    {/*setUserList({...userList,emailId: {email} })*/}
                <Button className="float-end" variant="primary" type="submit" onClick={() =>   createUser(dispatch,userList,email) }>
                    Done
                </Button>
            </Form>

            </div>
            ): (<div><HomeScreen/></div>)}
        </div>
    );
}

export default UserList;