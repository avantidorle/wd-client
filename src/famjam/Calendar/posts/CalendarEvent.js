import React from "react";

export const CalendarEvent=({summary, eventDate})=> {
    // console.log("summary",summary);
    // console.log("eventDate",eventDate);
    const month = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sept","Oct","Nov","Dec"];
    let eventMonth = month[eventDate.getMonth()];
    return(
        <>
            <div className = "list-group-item border-2">
                <div className={"fj-event-header bg-light text-dark bg-gradient shadow-sm rounded p-3 mb-2 text-center"}>
                    <strong ><p className={"fj-event-month text-uppercase m-0 p-0"}>
                        {eventMonth.toUpperCase()}
                    </p>
                    <p className={"fj-event-date text-bold m-0 p-0"}>
                        {eventDate.getDate()}
                    </p>
                    <p className={"fj-event-date text-bold m-0 p-0"}>
                        {eventDate.getFullYear()}
                    </p></strong>

                </div>
                <div className={""}>
                    <p className={"h8"}>{summary}</p>
                </div>
            </div>
            </>
    );
}