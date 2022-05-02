import {React, useEffect, useState} from "react";
import {CalendarEvent} from "./CalendarEvent";
import {getMyGoogleCalendarsList} from "../../GoogleAuthentication/calendarApi";

const EventPosts =  () => {
    const [numEvents, setNumEvents] = useState(20);
    const sliderChange = () => {

        let i = document.getElementById('numEvents');
        i.addEventListener('input', function () {
            setNumEvents(i.value);
        }, false);
    }

    const numberOfEvents = numEvents;
    // console.log(numberOfEvents);
        const [events,setEvents]= useState([]);
            useEffect( () => { getMyGoogleCalendarsList().then(r => {
                setEvents(r);

            })
            },[]);
    // const[reversed, setReversed] = useState(events.reverse());
    //         console.log("Events are ",events);
            return(
            <>
            <label htmlFor="numEvents" className="">Number of events:</label><br/>
            <input type="range" id="numEvents" className=""
            min="1" max="7" onChange={sliderChange}/>
            <div className={"list-group"}>
                {
                    events.slice(0).reverse().slice(0,numberOfEvents).map(event => <CalendarEvent summary = {event.summary} eventDate = {new Date(event.created)}/>)
                }
            </div>
            </>
            );
            }

export default EventPosts;