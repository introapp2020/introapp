import React from 'react';
import RegisterUsers from '../../security/RegisterUsers';
import Navbar from '../../components/layouts/Navbar';
import Head from 'next/head';


const register = () => {
    return(
        <>
        <Head>
        <title>Intro Hotel - Crear Cuenta</title>
        </Head>

        
        <Navbar>
            <RegisterUsers/>
        </Navbar>

        </>
    )
};

export default register;