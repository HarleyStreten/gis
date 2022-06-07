import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';

export default function Geolocation() {
    return (
        <Fab color="primary" aria-label="add" size='small'>
            <ModeStandbyIcon/>
        </Fab>
    );
}
