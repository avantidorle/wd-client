import {getToken} from "./tokens.js";
export const getUserDetails = async () => {
    try {
        console.log("get user details");
        const token = await getToken();
        const request2 = await fetch(
            `https://www.googleapis.com/oauth2/v3/userinfo`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const data2 = await request2.json();
        console.log(data2);
        // console.log("userDetails.js 20 | got user details", data);
        return data2;
    } catch (error) {
        console.log("userDetails.js 23 | error getting user details", error);
        return error.message;
    }
};