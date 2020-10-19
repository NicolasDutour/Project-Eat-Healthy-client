import React, { useEffect } from "react"
import { Link } from "gatsby"
import { connect } from 'react-redux'
import { Grid, Button, Paper, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import CardProductCart from '../CardProductCart'

import { getTotalPrice, getTotalProducts } from "../../actions/cartAction"

import { useStyles } from "../Styles/StyleCart"


const Cart = ({ totalItems, getTotalPrice, totalPrice, getTotalProducts }) => {
    const classes = useStyles()

    useEffect(() => {
        getTotalPrice()
        getTotalProducts()
    })

    return (
        <Grid container>
            <Grid item xs={12} sm={8}>
                <div className={classes.cart}>
                    {
                        totalItems.length ? (
                            totalItems.map(product => (
                                <CardProductCart key={product.id} product={product} />
                            ))) : (
                                <Paper className={classes.paper}>
                                    Vous n'avez aucun produit dans votre panier
                                    <Link to="/products">
                                        <Fab size="medium" color="primary" aria-label="add" className={classes.addproduct}>
                                            <AddIcon />
                                        </Fab>
                                    </Link>
                                </Paper>
                            )
                    }
                </div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <div className={classes.order}>
                    <h1 className={classes.title}>Votre commande</h1>
                    <div className={classes.totalprice}>Total: {totalPrice} €</div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.paybutton}
                    >
                        Payer
                    </Button>
                </div>
            </Grid>
        </Grid>

    )
}


const mapStateToProps = state => {
    return {
        totalItems: state.cart.cartProducts,
        totalPrice: state.cart.totalPrice
    };
};

const mapDispatchToProps = dispatch => ({
    getTotalPrice: () => dispatch(getTotalPrice()),
    getTotalProducts: () => dispatch(getTotalProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)