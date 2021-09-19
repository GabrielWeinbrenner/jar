import React, { useState, useEffect } from "react";

import { Typography, Grid, Button, ButtonBase } from "@material-ui/core";
export default function Profile(props) {
    const profileId = props.match.params.id;
    const [profile, setProfile] = useState({});

    //useEffect(()=>{
    //fetch("localhost:3001/profile/"+profileId)
    //.then((res) => res.json())
    //.then((data) => {
    //setProfile(data.profile);
    //});
    //});

    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={3} direction="column" container>
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
                    <Typography variant="h4">John Smith</Typography>
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
            <Grid item xs={6} direction="column" container>
                <Grid item>
                    <Typography variant="h4">Communities joined</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h2">Hello</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
