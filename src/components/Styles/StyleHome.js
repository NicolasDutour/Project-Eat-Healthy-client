import { makeStyles } from "@material-ui/core/styles"


export const useStyles = makeStyles(theme => ({
    background: {
        width: "100%",
        height: "60vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    },
    wrapper_hero: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    hero_title: {
        fontSize: 54
    }
}))