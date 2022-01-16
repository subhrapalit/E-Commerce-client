import { Box } from '@mui/material';
import React from 'react';
import Banner from './Banner';
import MidSection from './MidSection';
import Navbar from './Navbar';
import Slide from './Slide';


const Home = () => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div>
            <Navbar />
            <Box style={{ padding: '20px 0 20px 0', marginTop: 10, background: '#F2F2F2' }}>
                <Banner />
                <Box style={{ display: 'flex' }}>
                    <Box style={{ width: '81%' }}>
                        <Slide timer={true}
                            title='Deal of the Day'
                        />
                    </Box>
                    <Box style={{
                        marginTop: 12, background: '#FFFFFF', width: '17%', marginLeft: 10, padding: 5,
                    }}>
                        <img src={adURL} alt="" style={{ width: '100%', height: '100%' }} />
                    </Box>
                </Box>
                <MidSection />
                <Slide timer={false} title='Best Sellers' />
                <Slide timer={false} title='Recommended for you' />
                <Slide timer={false} title='Top Selection' />
                <Slide timer={false} title='Suggested Items' />

            </Box>


        </div>
    );
};

export default Home;