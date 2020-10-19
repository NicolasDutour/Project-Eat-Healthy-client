import React, { useState } from "react"
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

import { useStyles, StyledBadge } from "./Styles/StyleNavbar"

const Navbar = ({ siteTitle, totalProducts }) => {
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
                </List>
            </Drawer>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        totalProducts: state.cart.totalProducts,
        totalPrice: state.cart.totalPrice,
    };
};

export default connect(mapStateToProps)(Navbar)
