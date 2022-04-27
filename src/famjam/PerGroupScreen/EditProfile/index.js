import "../../css/profile.css"
import EditProfileItem from "./EditProfileItem";
import {useSelector} from "react-redux";

const EditProfile = () => {
const users = useSelector(state => state.users);
  return(
    <div>
      <EditProfileItem
      users = {users[0]}/>
    </div>
  )
}
export default EditProfile;