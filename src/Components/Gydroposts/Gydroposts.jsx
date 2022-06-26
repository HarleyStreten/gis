import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import {Fab} from "@mui/material";
import usePosts from '../../Api/hooks/usePosts';


const ITEM_HEIGHT = 48;

export default function LongMenu() {
    const posts = usePosts();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Fab
                size="small"
                color="primary"
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MenuIcon />
            </Fab>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '350px',
                    },
                }}
            >
                {posts?.map(({ id, location }) => (
                    <MenuItem key={id} selected={location === 'р. Ай (Метели)'} onClick={handleClose}>
                        {location.longitude}
                    </MenuItem>

                ))}
            </Menu>
        </div>
    );
}

