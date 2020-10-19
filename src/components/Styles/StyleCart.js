import { makeStyles } from "@material-ui/core/styles"


export const useStyles = makeStyles(theme => ({
    cart: {
        margin: "140px 20%"
    },
    title: {
        fontSize: 40
    },
    order: {
        textAlign: "center",
        borderLeft: "2px solid black",
        height: "100%"
    },
    totalprice: {
        fontSize: 32
    },
    paper: {
        padding: 20,
        fontSize: 32,
        textAlign: "center"
    },
    addproduct: {
        marginLeft: 20
    },
    paybutton: {
        fontSize: 22,
        marginTop: 30,
        width: 200,
        padding: "10px 20px"
    }
}))