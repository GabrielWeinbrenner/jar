import { Box, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";

function FormControl(props) {
    return (
        <div>
            <Divider />
            <Grid
                item
                container
                direction="row"
                style={{ marginTop: "1.5em", marginBottom: "3em" }}
                justifyContent="space-evenly"
            >
                <Grid item xs={3}>
                    <Typography variant="h4" style={{ marginBottom: "0.5em" }}>
                        <Box fontWeight="fontWeightBold">Basics</Box>
                    </Typography>

                    <Typography variant="subtitle1">
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
                <Grid item container direction="column" xs={7}>
                    {props.children}
                </Grid>
            </Grid>
        </div>
    );
}

export default FormControl;
