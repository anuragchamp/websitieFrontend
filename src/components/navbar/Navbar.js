import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import LeftSideNav from './LeftSideNav';
import Links from '../Links/Links';


export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar>
                    <LeftSideNav />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        StockSmoker
                    </Typography>
                </Toolbar>
                <Links />
            </AppBar>


        </Box>
    );
}