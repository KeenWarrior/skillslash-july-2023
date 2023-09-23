import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExploreIcon from "@mui/icons-material/Explore";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

const home = {
  path: "/",
  name: "Home",
  icon: <HomeIcon/>,
};

const explore = {
  path: "/explore",
  name: "Explore",
  icon: <ExploreIcon/>,
};

const reels = {
  path: "/reels",
  name: "Reels",
  icon: <VideoLibraryIcon/>,
};

const messages = {
  path: "/messages",
  name: "Messages",
  icon: <MessageIcon/>,
};

const notifications = {
  path: "/notifications",
  name: "Notifications",
  icon: <NotificationsIcon/>,
};

const search = {
  path: "/search",
  name: "Search",
  icon: <SearchIcon/>,
};

const paths = [home, explore, reels, messages, notifications, search];

export default paths;
export { home, explore, reels, messages, notifications, search };
