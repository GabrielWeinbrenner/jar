import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        marginBottom: "4.1em",
    },
    logo: {
        height: "4em",
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    tab: {
        minWidth: 10,
        marginLeft: "25px",
    },
    tabContainer: {
        marginLeft: "auto",
    },
    appBar: {
        // zIndex: theme.zIndex.modal + 1,
        background: "#40a6ff80",
        borderRadius: "0.5em",
        boxShadow: "none",
        alignItems: "center",
    },
    heading: {
        marginRight: "2em",
        color: "black",
    },
}));

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
const Header = (props) => {
    const classes = useStyles();
    // const theme = useTheme();

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar disableGutters={true}>
                        <IconButton
                            edge="start"
                            className={classes.logo}
                            color="inherit"
                            aria-label="menu"
                        >
                            🥤
                        </IconButton>
                        <Typography variant="h5" className={classes.heading}>
                            Jar
                        </Typography>
                        <Tabs
                            className={classes.tabContainer}
                            indicatorColor="primary"
                        >
                            <Tab
                                component={Link}
                                to="/"
                                label="View"
                                value="0"
                                index={0}
                            />
                            <Tab
                                component={Link}
                                to="/profile/101"
                                label="My Profile"
                                value="1"
                                index={1}
                            />
                            <Tab
                                component={Link}
                                to="/communityform"
                                label="Create Community"
                                value="1"
                                index={2}
                            />
                            <Tab
                                component={Link}
                                to="/profileform"
                                label="Create Profile"
                                value="1"
                                index={3}
                            />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    );
};

export default Header;
