import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
    customLink: {
        color: theme.palette.common.white,
        padding: "0 15px",
        letterSpacing: 1,
        display: "flex",
        fontSize: 13,
        height: 64,
        textTransform: "uppercase",
        textDecoration: "none",
        alignItems: "center",
        transition: "0.6s",
        "&.active": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
        },
        "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
        },

        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
}))
