import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
    Typography,
    Grid,
    Button,
    ButtonBase,
    Box,
    Tabs,
    Tab,
} from "@material-ui/core";
import IdeaItem from "../components/IdeaItem";
import ProfileItem from "../components/ProfileItem";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
export default function Profile(props) {
    const profileId = props.match.params.id;
    const [profile, setProfile] = useState({});
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //useEffect(()=>{
    //fetch("localhost:3001/profile/"+profileId)
    //.then((res) => res.json())
    //.then((data) => {
    //setProfile(data.profile);
    //});
    //});

    return (
        <Grid
            container
            direction="row"
            spacing={2}
            justifyContent="space-evenly"
        >
            <Grid
                item
                xs={3}
                direction="column"
                container
                style={{ marginLeft: "1em" }}
            >
                <Grid item>
                    <ButtonBase sx={{ width: 160, height: 160 }}>
                        <img
                            width={160}
                            height={160}
                            alt="complex"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.W1fDzc69LNG8XTNGzl6KXwHaHa%26pid%3DApi&f=1"
                        />
                    </ButtonBase>
                </Grid>
                <Grid item>
                    <Typography variant="h4">
                        <Box fontWeight="fontWeightBold">
                            Charleston Community
                        </Box>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={7} direction="column" container>
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab
                                label="Recent Contributions"
                                {...a11yProps(0)}
                            />
                            <Tab label="Ideas" {...a11yProps(1)} />
                            <Tab label="Members" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Grid
                            container
                            direction="column"
                            justify="space-between"
                        >
                            <Grid item>
                                <Typography variant="h5">
                                    Recent Contributions
                                </Typography>
                            </Grid>
                            <Grid item style={{ marginTop: "2em" }}>
                                <IdeaItem />
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid
                            container
                            direction="column"
                            justify="space-between"
                        >
                            <Grid item>
                                <Typography variant="h5">Ideas</Typography>
                            </Grid>
                            <Grid item style={{ marginTop: "2em" }}>
                                <IdeaItem />
                                <IdeaItem />
                                <IdeaItem />
                                <IdeaItem />
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Grid item>
                            <Typography variant="h5">Members</Typography>
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Grid item style={{ marginTop: "2em" }}>
                                <ProfileItem />
                            </Grid>
                            <Grid item>
                                <ProfileItem />
                            </Grid>
                            <Grid item>
                                <ProfileItem />
                            </Grid>
                            <Grid item>
                                <ProfileItem />
                            </Grid>
                            <Grid item>
                                <ProfileItem />
                            </Grid>
                        </Grid>
                    </TabPanel>
                </Box>
            </Grid>
        </Grid>
    );
}
