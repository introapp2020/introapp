import { Avatar, Container, Grid, TextField, Typography, Button } from '@material-ui/core';
import React from 'react';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';

const style = {
    paper: {
        marginTop : 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: 20,
        backgroundColor: "#f54f54",
        alignItems: "center"             
    },
    form: {
        width: "100%",
        marginTop: 20,
        alignItems: "center"
    },
    submit: {
        marginTop: 30,
        marginBottom: 20,
        alignItems: "center"
    }

}

const Login = () => {
    return (
        <Container maxWidth= "md">
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <VerifiedUserOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Ingrese Usuario
                </Typography>
                <form style={style.form}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item md={8} xs={12}>
                            <TextField
                                variant="outlined"
                                label="Nombre de Usuario"
                                placeholder= "Ingrese su nombre de usuario"
                                name="email"
                                margin="normal"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <TextField
                                variant="outlined"
                                label="Contraseña"
                                placeholder= "Ingrese su Contraseña"
                                type="password"
                                name="password"
                                margin="normal"
                                fullWidth
                            />                            
                        </Grid>

                        <Grid container justify="center">
                            <Grid item md={8} xs={12}>
                            <Button
                               type="submit"
                               variant="contained"
                               fullWidth size="large"
                               color="primary"
                               style={style.submit}
                               noValidate
                               >
                                Iniciar
                               </Button> 
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default Login;