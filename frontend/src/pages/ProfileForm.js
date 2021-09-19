import React from "react";
import { Box, Divider, Grid, TextField, Typography } from "@material-ui/core";
import FormControl from "../components/FormControl";

function ProfileForm() {
    return (
        <Grid container direction="column">
            <Grid item style={{ marginBottom: "3em", marginLeft: "3em" }}>
                <Typography variant="h3">
                    <Box fontWeight="fontWeightBold">Profile Creation</Box>
                </Typography>
            </Grid>
            <FormControl>
                <Grid item style={{ marginBottom: "2em" }}>
                    <TextField fullWidth label="Name" id="name" />
                </Grid>
                <Grid item style={{ marginBottom: "2em" }}>
                    <TextField fullWidth label="Email" id="email" />
                </Grid>
                <Grid item style={{ marginBottom: "2em" }}>
                    <TextField fullWidth label="Location" id="location" />
                </Grid>
            </FormControl>
        </Grid>
    );
}

export default ProfileForm;
