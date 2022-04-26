import React from "react";
import "../../css/home.css"
import {getUserDetails} from "../../GoogleAuthentication/userDetails";
import {getMyGoogleCalendarsList} from "../../GoogleAuthentication/calendarApi";

const HomeScreen = () => {
    const testing=()=>{
        console.log(getUserDetails());
    }
    return(
        <>
        <span className="fj-search-glass"><i className="fa fa-search"></i></span>
                    <div className="input-group">
                  <input type="search" className="form-control rounded-pill" placeholder="Search Post" aria-label="Search"
                    aria-described="search-addon" />
                </div>

            <span><img src = "/images/tom.jpg" width="55" className="fj-display-img1"/>
            <textarea className = "form-control" placeholder = "What's happening?" id="exampleTextarea" > </textarea></span>
            <br/>
            <span>< button className = "btn btn-primary rounded-pill" type="button" id="post" onClick={testing} >Post</button>
                        <i class="fa-brands fa-youtube fa-2x "></i>
            <i class="fa-solid fa-image fa-2x"></i></span>
        </>
    );
}

export default HomeScreen;