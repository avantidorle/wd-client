import Profiles from "../Profile";
import "../../css/profile.css"
import ActivityStream from "../Profile/ActivityStream";

const ProfileScreen = () => {
  return(
    <div>
      <Profiles/>
      <ActivityStream/>
    </div>
  )
}
export default ProfileScreen;