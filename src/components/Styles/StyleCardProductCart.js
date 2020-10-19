import { makeStyles } from "@material-ui/core/styles"


export const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        borderTop: `2px solid ${theme.palette.primary.grey}`,
        padding: 10
    },
    imageContainer: {
        width: 300,
        height: 222,
        display: "flex",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    },
    ingredients: {
        display: "flex",
        alignItems: "center",
        "& p": {
            fontSize: 20
        }
    },
    units: {
        display: "flex",
        alignItems: "center",
    },
    add_less_buttons_wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    less_icon: {
        fontSize: 30,
        color: theme.palette.primary.main,
        cursor: "pointer"
    },
    more_icon: {
        fontSize: 30,
        color: theme.palette.primary.main,
        cursor: "pointer"
    },
    total_current_item: {
        textAlign: "center",
        fontSize: 30
    }
}))