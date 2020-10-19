import { createMuiTheme, makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
    main: {
        marginTop: 64,
    },
}))


export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#F57C00",
            grey: "#E0E0E0",
        },
        secondary: {
            main: "#6a7472",
        },
        common: {
            black: "#000000",
            white: "#ffffff",
        },
    },
    typography: {
        fontFamily: "Open Sans",
    },
    "@global": {
        "html, body, ___gatsby": {
            height: "100%",
        },
    },
})
