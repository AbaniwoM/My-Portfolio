import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GiHamburgerMenu } from 'react-icons/gi';
import { makeStyles } from "@material-ui/core";
import "./Hamburger.scss"
import Socials from "../Socials/Socials";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  menu: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "16px",
      marginTop: "-8px",
      maxWidth: "68%",
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: "26px",
      marginTop: "-8px",
      minWidth: "95%",
    },
  },
}));

export default function Hamburger() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="hamburger-menu">
          <GiHamburgerMenu />
        </div>
      </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          className={classes.menu}
        >
          <Link to="projects" smooth={true} duration={1000}>
            <MenuItem>Projects</MenuItem>
          </Link>
          <Link to="tech" smooth={true} duration={1000}>
            <MenuItem>Technologies</MenuItem>
          </Link>
          <Link to="about" smooth={true} duration={1000}>
            <MenuItem>About</MenuItem>
          </Link>
          <MenuItem>
           <div className="socialIcns">
            <Socials />
           </div>
          </MenuItem>
        </Menu>
    </div>
  );
}
