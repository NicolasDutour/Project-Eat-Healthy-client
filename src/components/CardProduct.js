import React, { useState } from "react"
import Img from "gatsby-image"
import { connect } from 'react-redux'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
  Grid,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core"

import MuiAlert from '@material-ui/lab/Alert';

import { useStyles } from './Styles/StyleCardProduct'

import { addToCart, removeFromCart, getTotalProducts } from "../actions/cartAction"

const CardProduct = ({ product, addToCart, removeFromCart, cartProducts, getTotalProducts }) => {
  const classes = useStyles()
  const [openAlert, setOpenAlert] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    id: product.id,
    name: product.name,
    price: product.price,
    ingredients: product.ingredients,
    picture: product.picture.childImageSharp.fluid,
    units: 0,
  });

  const {
    units,
  } = formData;

  const handleChangeFormData = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Alert = (props) => {
    return <MuiAlert className={classes.alert} elevation={6} variant="filled" {...props} />;
  }

  const submitForm = async e => {
    e.preventDefault();
    if (formData.units <= 0) {
      setOpenAlert(true);
    } else {
      const existingProductInCart = cartProducts.filter(product => product.id === formData.id)

      if (existingProductInCart.length > 0) {
        handleClickOpenModal()
      } else {
        addToCart(formData);
        getTotalProducts()
      }

    }
  }

  const handleUpdate = () => {
    removeFromCart(product.id)
    handleCloseModal()
    addToCart(formData);
    getTotalProducts()
  }

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <Card className={classes.card}>
      <div className={classes.top}>
        <div className={classes.card_header}>
          <h2 className={classes.name}>{product.name}</h2>
          <div className={classes.price}>{product.price} €</div>
        </div>
        <CardMedia className={classes.imageContainer}>
          <Img
            className={classes.image}
            fluid={product.picture.childImageSharp.fluid}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.ingredients}>
            {product.ingredients}
          </Typography>
        </CardContent>
      </div>
      <div className={classes.bottom}>
        <form onSubmit={submitForm} noValidate className={classes.form}>
          <Grid className={classes.gridContainer} container spacing={2}>
            <Grid item xs={8} className={classes.grid}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Ajouter au panier
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                onChange={handleChangeFormData}
                value={units}
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
          </Grid>
        </form>
      </div>


      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: "center" }}>
        <Alert onClose={handleCloseAlert} severity="error">
          Vous devez ajouter au minimum 1 produit
        </Alert>
      </Snackbar>


      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Cette action remplacera le produit dans le panier actuel
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Annuler
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Modifier
          </Button>
        </DialogActions>
      </Dialog>
    </Card >
  )
}

const mapStateToProps = state => ({
  cartProducts: state.cart.cartProducts
})

const mapDispatchToProps = dispatch => ({
  addToCart: (
    id,
    name,
    price,
    ingredients,
    picture,
    units) => dispatch(addToCart(
      id,
      name,
      price,
      ingredients,
      picture,
      units)),
  removeFromCart: (id, units) => dispatch(removeFromCart(id, units)),
  getTotalProducts: () => dispatch(getTotalProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardProduct)
