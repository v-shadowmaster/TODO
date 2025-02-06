import React from "react";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import { getInitials } from "../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <Avatar>
          <Typography variant="h5">{getInitials("vinay kumar")}</Typography>
        </Avatar>

        <div className="container">
          {" "}
          <LogoutIcon onClick={onLogout} />
        </div>
      </Stack>
    </div>
  );
};

export default ProfileInfo;
