export const GET_CALENDAR_EVENTS = "GET_CALENDAR_EVENTS";

export const calendarEvents = async (dispatch, state) => {
    dispatch(
        {
            type: GET_CALENDAR_EVENTS,
            state
        }
    )
};