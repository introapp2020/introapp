import { Avatar, Container, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import LockOutLineIcon from '@material-ui/icons/LockOutlined';


const style = {
    paper: {
        marginTop : 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: 8,
        backgroundColor: "#f54f54"
    },
    form: {
        width: "100%",
        marginTop: 10,
        alignItems: "center"
    }

}

const RegisterUsers = () => {
    return (

        <Container maxWidth="md">
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockOutLineIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" >
                    Crea una Cuenta
                </Typography>
                <form style={style.form}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item md={9} xs={12}>
                            <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            margin="normal"
                            name="nombre" 
                            placeholder="Diego Armando"
                            fullWidth 
                            label="Ingrese su nombre"/>
                        </Grid>
                        <Grid item md={9} xs={12}>
                            <TextField 
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            margin="normal"
                            name="apellido"
                            placeholder="Heinz Ventura"
                            fullWidth 
                            label="Ingrese su apellidos"/>
                            
                        </Grid>
                        <Grid item md={9} xs={12}>
                            <TextField 
                            name="email"
                            placeholder="diegoheinz"
                            fullWidth 
                            label="Ingrese su e-mail"/>
                        </Grid>
                        <Grid item md={9} xs={12}>
                            <TextField type="password" name="password" fullWidth label="Ingrese su password"/>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>

    )
}
export default RegisterUsers;