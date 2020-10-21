import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import { connect } from 'react-redux'
import MenuIcon from "@material-ui/icons/Menu"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {
    Drawer,
    AppBar,
    Toolbar,
    List,
    IconButton,
    ListItem,
    ListItemText,
} from "@material-ui/core"


import Navigation from "./Navigation"
import { logout } from "../actions/auth";

import { useStyles, StyledBadge } from "./Styles/StyleNavbar"

const Navbar = ({ siteTitle, totalProducts, auth: { isAuthenticated, user, loading }, logout }) => {
    const classes = useStyles()

    const [openDrawer, setOpenDrawer] = useState(false)

    const handleDrawerOpen = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Link to="/" className={classes.logo} variant="h6"> {siteTitle} </Link>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Navigation />
                    <Link to="/cart" className={classes.cartBadge} variant="h6">
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={`${totalProducts}`} color="primary">
                                <ShoppingCartIcon className={classes.cartIcon} />
                            </StyledBadge>
                        </IconButton>
                    </Link>
                    {
                        isAuthenticated ? <div className={classes.customLink} onClick={logout} variant="h6"> Se déconnecter </div> : (
                            <Fragment>
                                <Link to="/login" className={classes.customLink} variant="h6"> Se connecter </Link>
                                <Link to="/register" className={classes.customLink} variant="h6"> S'inscrire </Link>
                            </Fragment>
                        )
                    }
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={openDrawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List className={classes.list}>
                    <ListItem
                        className={classes.listItem}
                        disableRipple
                        disableGutters
                        button
                        component={Link}
                        to="/"
                    >
                        <ListItemText className={classes.listItemText} primary="Accueil" />
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        disableRipple
                        disableGutters
                        button
                        component={Link}
                        to="/products"
                    >
                        <ListItemText className={classes.listItemText} primary="Produits" />
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        disableRipple
                        disableGutters
                        button
                        component={Link}
                        to="/cart"
                    >
                        <ListItemText className={classes.listItemText} primary="Panier" />
                    </ListItem>
                    {
                        isAuthenticated ? (
                            <ListItem
                                className={classes.listItem}
                                disableRipple
                                disableGutters
                                button
                            >
                                <ListItemText onClick={logout} className={classes.listItemText} primary="Se déconnecter" />
                            </ListItem>
                        ) : (
                                <Fragment>
                                    <ListItem
                                        className={classes.listItem}
                                        disableRipple
                                        disableGutters
                                        button
                                        component={Link}
                                        to="/login"
                                    >
                                        <ListItemText className={classes.listItemText} primary="Se connecter" />
                                    </ListItem>
                                    <ListItem
                                        className={classes.listItem}
                                        disableRipple
                                        disableGutters
                                        button
                                        component={Link}
                                        to="/register"
                                    >
                                        <ListItemText className={classes.listItemText} primary="S'inscrire" />
                                    </ListItem>
                                </Fragment>
                            )
                    }
                </List>
            </Drawer>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        totalProducts: state.cart.totalProducts,
        totalPrice: state.cart.totalPrice,
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)