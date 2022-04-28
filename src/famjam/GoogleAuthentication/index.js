import React, { useState, useEffect } from "react";
import { getMyGoogleCalendarsList } from "./calendarApi.js";
import {Link} from "react-router-dom";
import {getUserDetails} from './userDetails.js';
import background from "./vect.png";
import "../css/landing.css"
import {useDispatch, useSelector} from "react-redux";
import {findOneUser} from "../actions/users-action";

function GoogleAuthentication() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        handleTokenFromQueryParams();
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const createGoogleAuthLink = async () => {
        try {
            const request = await fetch("http://localhost:4000/createAuthLink", {
                method: "POST",
            });
            const response = await request.json();
            console.log(response.url);
            window.location.href = response.url;
        } catch (error) {
            console.log("App.js 12 | error", error);
            throw new Error("Issue with Login", error.message);
        }
    };

    const handleTokenFromQueryParams = () => {
        const query = new URLSearchParams(window.location.search);
        const accessToken = query.get("accessToken");
        const refreshToken = query.get("refreshToken");
        const expirationDate = newExpirationDate();
        console.log("App.js 30 | expiration Date", expirationDate);
        console.log("inside handleTokenFromQueryParams")
        if (accessToken && refreshToken) {
            storeTokenData(accessToken, refreshToken, expirationDate);
            setIsLoggedIn(true);
        }
    };

    const newExpirationDate = () => {
        var expiration = new Date();
        expiration.setHours(expiration.getHours() + 1);
        return expiration;
    };

    const storeTokenData = async (token, refreshToken, expirationDate) => {
        console.log("inside storeTokenData")
        sessionStorage.setItem("accessToken", token);
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("expirationDate", expirationDate);
        console.log(getUserDetails().then(async r => {
                console.log(r)
                console.log(r.email)
            sessionStorage.setItem("currentUserEmail",r.email);
                await findOneUser(dispatch, r.email).then(res => {
                        console.log(res);
                        console.log(users);
                        console.log("r.email" + r.email);
                        if (res === undefined) {
                            console.log("user not match");
                        } else if (r.email === users.email) {
                            console.log("user found");
                        }
                    }
                )
            }

        ));




        // window.location.href="http://localhost:3000/famjam/registar";
        //console.log(getMyGoogleCalendarsList());
        //console.log(getUserDetails())
    };

    const signOut = () => {
        window.location.href = "/";
        setIsLoggedIn(false);
        sessionStorage.clear();
    };

    const displayHomePage = () =>{
        console.log(window.location)
        window.location.href = "famjam/group1/expense";
    };
    return (
        <div className="App">
            {!isLoggedIn ? (
                    <>
                        <div className="row fj-background-color">
                            <div className="col-1">
                                <a className="navbar-brand" href="#">
                                    <img src="/images/tom.jpg" alt="" width="64" height="64" className=" rounded-circle d-inline-block ms-4 mb-1 align-text-top"/>
                                </a>
                            </div>
                            <div className="col-3 mt-3 ">
                                <h4 className="fj-title-font text-light">FAMJAM</h4>
                            </div>
                            <div className="col-8 mt-2 ">
                                <div className="row ">
                                    <div className="col-7"/>
                                    <div className="col-5">
                        <span>
                        <Link to="../ourstory">
                             <button className="bg-transparent border-0 text-light p-3"><h6 className="fj-title-font">Our story</h6></button></Link>
                        <Link to="../team">
                            <button className="bg-transparent border-0 text-light p-3" ><h6 className="fj-title-font">Team</h6></button></Link>
                            <button className="bg-transparent border-0 text-light p-3" onClick={createGoogleAuthLink}><h6 className="fj-title-font">SignUp</h6></button>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-0 fj-centerBox row border border-primary rounded"  className="tiledBackground" style={{ backgroundImage: `url(${background})` }} >
                            <div className="centered bg-black p-4">
                                <h2 className=" fj-title-font mt-2 rounded ms-1"> Stay Connected !! </h2>
                                <div><h5 className="centered-small rounded ms-1"> Organize Tasks, Discover Stories, Manage Expenses .....</h5>
                                    <h5 className="centered-small rounded ms-1"></h5>
                                </div>
                            </div>
                        </div>
                        <div className=" fj-thirdRow p-3 row fj-title-font">

                            <div className="col-4 ">
                 <span>
                <i className="fa-solid fa-user-plus fj-group-icon fa-3x"/>
                <button className="rounded-pill bg-primary border-0 mt-3"> Create New Group</button>
                 </span>
                            </div>

                            <div className="col-4">
                 <span>
                <i className="fa-solid fa-calendar-plus fj-calender-icon fa-3x"/>
                <button className="rounded-pill bg-danger border-0 mt-3"> Schedule a Task</button>
                 </span>
                            </div>

                            <div className="col-4">
                 <span>
                <i className="fa-solid fa-hand-holding-dollar fj-money-icon fa-3x"/>
                <button className=" rounded-pill  bg-success  border-0 mt-3"> Add New Expense </button>
                 </span>
                            </div>
                        </div>

                        <div className="row bg-secondary fj-footer">
                            <div className="col-9 text-dark">

                    <span>
                        {/*<div><img src="/images/tom.jpg" alt="" width="54" height="54" className=" rounded-circle d-inline-block ms-4 mb-1 align-text-top"/></div>*/}
                        <div className="text-dark mt-2">Follow us on social media</div>
                        <i className="fa-brands fa-twitter fa-1x me-1 ms-3"/>
                        <i className="fa-brands fa-facebook me-1"/>
                        <i className="fa-brands fa-instagram me-1"/>
                        <i className="fa-brands fa-linkedin me-1"/>
                    </span>
                            </div>
                            <div className="col-3 bg-secondary " >
                   <span >
                       <button className="mt-3 bg-transparent border-0 text-dark">Help</button>
                       <button className="mt-3 bg-transparent border-0 text-dark">Careers</button>
                       <button className="mt-3 bg-transparent border-0 text-dark">Privacy</button>
                       <button className="mt-3 bg-transparent border-0 text-dark">Terms</button>
                       <button className="mt-3 bg-transparent border-0 text-dark">About</button>
                   </span>
                            </div>
                        </div>
                    </>
            ) : (
                    <>
                        <button onClick={getMyGoogleCalendarsList}>
                            Get Google Calendars
                        </button>
                        <button onClick={signOut}>Sign Out</button>
                        <button onClick={getUserDetails}>User Details</button>
                    </>
            )}
        </div>
    );
}

export default GoogleAuthentication;