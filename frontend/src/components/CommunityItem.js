import { Chip, Grid, Paper, Typography, Link } from "@material-ui/core";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});
export default function CommunityItem() {
    return (
        <Paper
            sx={{
                p: 10,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
            }}
            style={{
                margin: "2em",
                padding: "0.5em",
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
                                    Community Name
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
                            <Grid item xs container direction="row" spacing={5}>
                                <Grid item>
                                    <Chip label="member #1" />
                                </Grid>
                                <Grid item>
                                    <Chip label="member #2" />
                                </Grid>
                                <Grid item>
                                    <Chip label="member #3" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Chip label="Subject" />
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
