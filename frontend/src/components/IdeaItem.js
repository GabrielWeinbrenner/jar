import React from "react";
import {
    Chip,
    Grid,
    Paper,
    Typography,
    Link,
    Box,
    Button,
} from "@material-ui/core";
import LinearProgress from "@mui/material/LinearProgress";

import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});
function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

function IdeaItem() {
    const [progress, setProgress] = React.useState(0);

    return (
        <Paper
            sx={{
                p: 10,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
            }}
            style={{
                margin: "1em",
                padding: "2em",
                maxWidth: "70em",
                minWidth: "35em",
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img
                            alt="complex"
                            src="https://source.unsplash.com/random"
                        />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Link href="/community/101">
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Idea Name
                                </Typography>
                            </Link>
                            <Typography variant="body2" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Typography>
                            <Grid item direction="row" spacing={5}>
                                <Box sx={{ width: "100%" }}>
                                    <LinearProgressWithLabel value={progress} />
                                </Box>
                            </Grid>
                            <Grid item>
                                {progress != 100 ? (
                                    <Button variant="contained">Vote</Button>
                                ) : (
                                    ""
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Chip label="Goal" />
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default IdeaItem;
