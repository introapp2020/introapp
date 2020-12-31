import { Avatar, Container, Grid, TextField, Typography, Button } from '@material-ui/core';
import React from 'react';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';


// Validaciones
import useValidation from '../Hooks/useValidation';
import validarCuenta from '../validation/validarCuenta';

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

const STATE_INICIAL = {
    nombre: '',
    apellido: '',
    email: '',
    password: ''
}


const RegisterUsers = () => {

  
    
    const { valores, errores, handleChange, handleSubmit } = useValidation
    (STATE_INICIAL, validarCuenta, registarUsuario ) ;
    
    const { nombre, apellido, email, password} = valores;


    function registarUsuario() {
        console.log('creando cuenta')
    }

    return (        
        <Container maxWidth="md">
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockOpenOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Crea una Cuenta
                </Typography>
                <form style={style.form}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item md={8} xs={12}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            name="nombre" 
                            placeholder="Diego Armando"
                            fullWidth 
                            label="Nombres"
                            value={nombre}
                            onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            name="apellido"
                            placeholder="Heinz Ventura"
                            fullWidth 
                            label="Apellidos"
                            value={apellido}
                            onChange={handleChange}
                            />
                            
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            name="email"
                            placeholder="diegoheinz@intro.com"
                            fullWidth 
                            label="Correo"
                            value={email}
                            onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            type="password" 
                            name="password" 
                            fullWidth 
                            label="Contraseña"
                            placeholder="cree una contraseña"
                            value={password}
                            onChange={handleChange}
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
                               onClick={handleSubmit}
                               noValidate
                               >
                                Registar
                               </Button> 
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>

    )
}
export default RegisterUsers;