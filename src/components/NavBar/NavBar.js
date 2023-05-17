import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/images/crown/orange_crown.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

const options = ["biography", "exhibition", "games", "impressum"];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#a3bce1", color: "#1D4DgF" }}
      >
        <Toolbar variant="dense">
          <Link to="/">
            <img src={logo} alt="logo" style={{ maxWidth: "60px" }} />
          </Link>
          <IconButton
            edge="end"
            color="#fff"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ marginLeft: "auto" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
            sx={{
              "& .MuiMenu-paper": {
                backgroundColor: "#8cabd9",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} onClick={handleClose}>
                <Link
                  to={`/${option.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                  className="menu-item__link"
                >
                  {option}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
