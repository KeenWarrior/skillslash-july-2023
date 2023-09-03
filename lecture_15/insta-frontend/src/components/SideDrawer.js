"use client";

import Drawer from "@mui/material/Drawer";
import paths from "@/data/navigation";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useRouter, usePathname } from "next/navigation";

import {
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function SideDrawer() {
  const pathName = usePathname();
  console.log("pathName", pathName);
  return (
    <ThemeProvider theme={theme}>
      <Hidden smUp>
        <BottomNavigation value={pathName}>
          <BottomNavigationItems paths={paths} />
        </BottomNavigation>
      </Hidden>

      <Hidden smDown>
        <Drawer anchor="left" open={true} variant="permanent">
          <List>
            <DrawerListItems paths={paths} />
          </List>
        </Drawer>
      </Hidden>
    </ThemeProvider>
  );
}

const DrawerListItems = ({ paths }) => {
  const router = useRouter();
  return paths.map((path, index) => {
    return (
      <ListItem
        onClick={() => router.push(path.path)}
        key={index}
        style={{
          height: "4rem",
        }}
      >
        <ListItemIcon
          style={{
            alignSelf: "center",
          }}
        >
          {path.icon}
        </ListItemIcon>
        <Hidden lgDown>
          <ListItemText primary={path.name} />
        </Hidden>
      </ListItem>
    );
  });
};

const BottomNavigationItems = ({ paths }) => {
  console.log("Rendered");
  const router = useRouter();
  return paths.map((path, index) => {
    return (
      <BottomNavigationAction
        key={index}
        label={path.name}
        value={path.path}
        icon={path.icon}
        onClick={() => {
            console.log(path.path);
          router.push(path.path);
        }}
      />
    );
  });
};
