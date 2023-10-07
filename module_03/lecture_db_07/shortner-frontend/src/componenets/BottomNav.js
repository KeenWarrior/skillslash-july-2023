import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(location.pathname);

  return (
    <Box sx={{ width: "100vw" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(newValue);
        }}
      >
        <BottomNavigationAction value="/" label="Home" icon={<RestoreIcon />} />
        <BottomNavigationAction
          value="/links"
          label="Links"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          value="/settings"
          label="Settings"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
