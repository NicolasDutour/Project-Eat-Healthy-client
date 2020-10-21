import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, navigate } from "gatsby"

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
import { Visibility, VisibilityOff } from "@material-ui/icons";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { login } from "../../actions/auth";

import { useStyles } from "../Styles/StyleLogin"

const Login = ({ login, isAuthenticated }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        identifier: "",
        password: ""
    });

    const [values, setValues] = useState({
        showPassword: false
    });

    const { identifier, password } = formData;

    const handleChangeFormData = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const submitForm = async e => {
        e.preventDefault();
        login(identifier, password);
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
                    Se Connecter
                </Typography>
                <form onSubmit={submitForm} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="identifier"
                        label="Username"
                        autoComplete="identifier"
                        name="identifier"
                        onChange={handleChangeFormData}
                        value={identifier}
                    />
                    <FormControl variant="outlined" fullWidth margin="normal" required>
                        <InputLabel htmlFor="outlined-adornment-password">
                            Mot de passe
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? "text" : "password"}
                            onChange={handleChangeFormData}
                            name="password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={110}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Se connecter
                    </Button>
                    <Grid container>
                        <Grid
                            container
                            item
                            className={classes.forgotPasswordGrid}
                            xs={12}
                            md={6}
                        >
                            <Link to="/" variant="body2">
                                Mot de passe oublié ?
                            </Link>
                        </Grid>
                        <Grid
                            container
                            item
                            className={classes.forgotPasswordGrid}
                            xs={12}
                            md={6}
                        >
                            Pas encore de compte ?
                            <Link to="/" variant="body2">
                                S'inscrire
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
    login: (identifier, password) => dispatch(login(identifier, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);