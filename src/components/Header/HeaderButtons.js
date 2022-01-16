import { styled } from '@mui/material/styles';
import { Badge, Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';



const LoginButton = styled(Button)(({ theme }) => ({

    backgroundColor: grey[50],
    color: '#2874f0',
    '&:hover': {
        backgroundColor: grey[50],
    },

    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    // textDecoration: 'none'
}));

const HeaderButtons = () => {

    const [open, setOpen] = React.useState(false);
    const openLoginDialog = () => {
        setOpen(true);
    }

    return (

        <Stack sx={{ m: '0 15% 0 auto', display: 'flex', alignItems: 'center' }} spacing={5} direction="row" >
            <Link style={{ textDecoration: 'none' }}><LoginButton variant="contained" onClick={() => openLoginDialog()} >Log in</LoginButton></Link>
            <Link style={{ textDecoration: 'none', color: '#ffffff' }}><Typography >More</Typography></Link>
            <Link to='/cart' style={{ textDecoration: 'none', color: '#ffffff', display: 'flex' }}>
                <Badge badgeContent={4} color="error" >
                    <ShoppingCartIcon ml={5} />
                </Badge>
                <Typography sx={{ ml: '15%' }} >Cart</Typography>
            </Link>
            <Login open={open} setOpen={setOpen} />
        </Stack>


    );
};

export default HeaderButtons;