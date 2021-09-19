import { Box, Divider, Grid, TextField, Typography } from "@material-ui/core";
import FormControl from "../components/FormControl";
import React from "react";

function CommunityForm() {
    return (
        <Grid container direction="column">
            <Grid item style={{ marginBottom: "3em", marginLeft: "3em" }}>
                <Typography variant="h3">
                    <Box fontWeight="fontWeightBold">Community Creation</Box>
                </Typography>
            </Grid>
            <FormControl>
                <Grid item style={{ marginBottom: "2em" }}>
                    <TextField fullWidth label="Name" id="name" />
                </Grid>
                <Grid item style={{ marginBottom: "2em" }}>
                    <TextField fullWidth label="Location" id="location" />
                </Grid>
                <Grid item style={{ marginBottom: "2em" }}>
                    <TextField fullWidth label="Members" id="members" />
                </Grid>
            </FormControl>
        </Grid>
    );
}

export default CommunityForm;
