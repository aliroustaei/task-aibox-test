import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MenuOpen } from "@mui/icons-material";
const menuItem = [" خانه", "درباره ما", "مارکتAPI "];

const MobileMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "50vw" }}
      >
        <List sx={{ width: "50vw", textAlign: "center" }}>
          {menuItem.map((page, index) => (
            <ListItemButton key={index} sx={{ justifyContent: "center" }}>
              <ListItemIcon>
                <ListItemText sx={{ textAlign: "center" }}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#333" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuOpen sx={{ color: "inherit", fontSize: "40px" }} />
      </IconButton>
    </>
  );
};

export default MobileMenu;
