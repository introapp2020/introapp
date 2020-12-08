import { Avatar, Container, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import LockOutLineIcon from '@material-ui/icons/LockOutlined';
import Navbar from '../components/layouts/Navbar';

const style = {
    paper: {
        marginTop : 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: 8,
        backgroundColor: "#e53935"
    },
    form: {
        width: "100%",
        marginTop: 10
    }

}

const RegisterUsers = () => {
    return (
        <Navbar>
            <Container maxWidth="md">
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockOutLineIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" >
                        Crea una Cuenta
                    </Typography>
                    <form style={style.form}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <TextField name="nombre" fullWidth label="Ingrese su nombre"/>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Navbar>
    )
}
export default RegisterUsers;