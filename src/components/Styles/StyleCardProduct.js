import { makeStyles } from "@material-ui/core/styles"


export const useStyles = makeStyles(theme => ({
    card: {
        width: 300,
        height: 530,
        margin: "0 15px 30px 15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    card_header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    name: {
        fontSize: 20,
        marginLeft: 5
    },
    price: {
        fontSize: 30,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        width: 80,
        textAlign: "center",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    imageContainer: {
        width: 300,
        height: 222,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    ingredients: {
        fontSize: 18
    },
    bottom: {
        marginBottom: 10,
    },
    grid: {
        display: "flex",
        alignItems: "center"
    },
    form: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    button: {
        height: "100%"
    },
    alert: {
        fontSize: 20,
        color: theme.palette.common.black,
    }
}))