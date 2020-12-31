import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Head from 'next/head';

import Login from '../../security/Login';


const login = () => {
    return(
        <>
        <Head>
        <title>Intro Hotel - Autentificar Usuario</title>
        </Head>

        
        <Navbar>
            <Login />
        </Navbar>

        </>
    )
};

export default login;