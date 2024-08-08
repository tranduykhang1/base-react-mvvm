import { useAnalytics } from "@/presentations/hooks/firebase/useAnalytics";
import { useAuthContext } from "@/providers/AuthProvider";
import { useEffect } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const { user, isAuth } = useAuthContext();

    const { event } = useAnalytics();

    useEffect(() => {
        event("page_view");
    }, []);

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
              {isAuth ? `Hi, ${user?.email}` : "React MVVM"}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
