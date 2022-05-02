import { getToken } from "./tokens.js";
import {useEffect} from "react";
export const getMyGoogleCalendarsList = async () => {
    try {
        const token = await getToken();
        // console.log(
        //     "googleCalendar.js 49 | getting calendar events with token",
        //     token
        // );
        const request = await fetch(
            `https://www.googleapis.com/calendar/v3/users/me/calendarList`,


            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        let eventList = [];
        const data = await request.json();
        let calendars = data.items;
        // console.log(calendars);

        for(let i = 0; i < calendars.length; i++){
            // console.log("===========================");
            // console.log(calendars[i].id);
            // console.log("===========================");

            if(calendars[i].summary===("FAMJAM-TODOS")){
                let eventURL = "https://www.googleapis.com/calendar/v3/calendars/" + calendars[i].id + "/events";
                // console.log("Event URL is");
                if(eventURL.includes("#")) {
                    eventURL= eventURL.replace("#","%23");
                }
                // console.log(eventURL);
                // const request2 = await fetch(
                //     eventURL,
                //     {
                //         headers: {
                //             Authorization: `Bearer ${token}`,
                //         },
                //         params: {
                //             orderBy: "updated",
                //             maxResults: 30,
                //             },
                //     }
                //
                // )
                const request2 = await fetch(
                    eventURL,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        params: {
                            maxResults: 30,
                            orderBy: "updated",
                        }
                    }
                );

                const data2 = await request2.json();
                if(data2.items) {
                    // console.log("Data items are "+ JSON.stringify(data2.items));

                    // eventList.push.apply(eventList,data2.items);
                    eventList.push(...data2.items);
                    // console.log(eventList);
                }
                // console.log("googleCalendar.js 31 | got specific calendar events", data2);
            }
        }
        // console.log("EventList",eventList);
        return eventList;
    } catch (error) {
        console.log("googleCalendar.js 35 | error getting calendar data", error);
        return  {error: error.message};
    }
};