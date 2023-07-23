import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLocation, useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  return (
    <Box width={'100vw'}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          navigate(newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          value={"/recents"}
          label="Recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          value={"/favorites"}
          label="Favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          value={"/nearby"}
          label="Nearby"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
