import React, { useState } from "react";
import { Link, navigate } from "gatsby"
import { connect } from "react-redux";

import {
    Paper,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    IconButton,
    InputLabel,
    InputAdornment,
    FormControl,
    OutlinedInput,
    Container
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { register } from "../../actions/auth";
import { useStyles } from '../Styles/StyleRegister'

const Register = ({ register, isAuthenticated }) => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const { username, email, password, confirmPassword } = formData;

    const handleChangeFormData = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [values, setValues] = useState({
        showPassword: false
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const submitForm = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log("Les mots de passe doivent être identiques");
        } else {
            register(username, email, password);
        }
    };

    if (isAuthenticated) {
        navigate('/')
    }

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={classes.title} component="h1" variant="h5">
                    S'enregistrer
                </Typography>
                <form onSubmit={submitForm} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Nom d'utilisateur"
                                onChange={handleChangeFormData}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={handleChangeFormData}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Mot de passe
                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? "text" : "password"}
                                    value={password}
                                    name="password"
                                    onChange={handleChangeFormData}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                        <VisibilityOff />
                                                    )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={110}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                variant="outlined"
                                onChange={handleChangeFormData}
                                name="confirmPassword"
                                value={confirmPassword}
                                className={classes.grid}
                                id="outlined-password-input"
                                label="Confirmer mot de passe"
                                type="password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        S'inscrire
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            Déjà un compte ?
                            <Link to="/login" variant="body2">
                                Se connecter
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => ({
    register: (username, email, password) =>
        dispatch(register(username, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);