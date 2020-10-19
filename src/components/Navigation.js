import React from "react"
import { Link } from 'gatsby'

import { useStyles } from "./Styles/StyleNavigation"

const Navigation = () => {
    const classes = useStyles()

    return [
        ["Accueil", "/"],
        ["Produits", "/products"],
    ].map(([title, to], index) => (
        <Link
            key={index}
            partiallyActive={to !== "/" && true}
            activeClassName="active"
            to={to}
            className={classes.customLink}
        >
            {title}
        </Link>
    ))
}

export default Navigation
