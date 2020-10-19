import React from "react"
// import Img from "gatsby-image"
import { connect } from 'react-redux'
import {
    Typography,
    Grid,
    Fab,
    TextField
} from "@material-ui/core"
import ClearIcon from '@material-ui/icons/Clear';

import { removeFromCart } from "../actions/cartAction"

import { useStyles } from './Styles/StyleCardProductCart'

const CardProduct = ({ product, removeFromCart }) => {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={4}>
                <div>
                    {/* <Img
                    className={classes.image}
                    fluid={product.thumbnail.childImageSharp.fluid}
                /> */}
                    <img src="https://via.placeholder.com/150" alt="" />
                </div>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.ingredients}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.ingredients}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={2} className={classes.units}>
                <TextField
                    // onChange={handleChangeFormData}
                    value={product.units}
                    id="outlined-number"
                    label="Quantité"
                    type="number"
                    name="units"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={2} className={classes.add_less_buttons_wrapper}>
                <Fab onClick={() => removeFromCart(product.id, product.units)} size="medium" color="primary" aria-label="clear">
                    <ClearIcon />
                </Fab>
            </Grid>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => ({
    removeFromCart: (id, units) => dispatch(removeFromCart(id, units))
});

export default connect(null, mapDispatchToProps)(CardProduct)
