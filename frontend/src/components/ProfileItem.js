import { Chip, Grid, Paper, Typography, Link } from "@material-ui/core";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});
export default function ProfileItem() {
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
                padding: "2em",
                maxWidth: "30em",
                minWidth: "15em",
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
                <Grid item sm container>
                    <Grid item container direction="column" alignItems="center">
                        <Grid item xs>
                            <Link href="/profile/101">
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    John Smith
                                </Typography>
                            </Link>
                            <Grid
                                item
                                xs
                                container
                                direction="row"
                                alignItems="center"
                            >
                                <Typography
                                    gutterBottom
                                    variant="h7"
                                    component="div"
                                >
                                    Location
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
