import { Box, Dialog, DialogContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: '#2874f0',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        width: '40%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },

})

const Login = ({ open, setOpen }) => {
    const classes = useStyle();
    const handleClose = () => {
        setOpen(false);
    };
    // const loginImage = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png';
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box>
                    <Box className={classes.image} >
                        <Typography variant="h5">Login</Typography>
                        <Typography style={{ marginTop: 20 }}>Get access to your Orders, Wishlist and Recommendations</Typography>

                    </Box>
                    <Box>

                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default Login;