import { makeStyles, withStyles } from "@material-ui/core/styles"
import Badge from '@material-ui/core/Badge';

export const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 5,
    },
}))(Badge);

export const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    appBar: {
        boxShadow: "none",
        minHeight: 64,
        backgroundColor: "black",
        padding: "0 15%",
        [theme.breakpoints.down("md")]: {
            padding: 0,
        },
    },
    toolBar: {
        padding: 0,
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "block",
            marginRight: 10,
            color: theme.palette.primary.main
        },
    },
    link: {
        [theme.breakpoints.down("md")]: {
            display: "none",
            marginRight: 20,
        },
    },
    logo: {
        color: theme.palette.primary.main,
        height: 64,
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        fontSize: 32,
        textDecoration: "none",
        backgroundColor: theme.palette.common.black,
        marginRight: "auto"
    },
    cartBadge: {
        height: 64,
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        textDecoration: "none",
        color: theme.palette.common.white,
    },
    cartIcon: {
        color: theme.palette.common.white,
        fontSize: 32,
    },
    drawerPaper: {
        width: "100%",
        height: "auto",
        marginTop: 64,
    },
    list: {
        padding: 0,
    },
    listItem: {
        [theme.breakpoints.up("lg")]: {
            display: "none",
        },
        padding: 0,
        height: 57,
        paddingLeft: 24,
        backgroundColor: "#111111",
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
        "&:first-child": {
            borderBottom: "1px solid #333",
        },
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
    },
    listItemText: {
        color: theme.palette.common.white,
    },
    listItemCollapse: {
        paddingTop: 0,
        paddingBottom: 0,
    },


}))
