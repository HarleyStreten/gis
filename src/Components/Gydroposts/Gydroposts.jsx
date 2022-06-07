import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import {Fab} from "@mui/material";

const options = [
    'р. Ай (Метели)',
    'р. Ашкадар (Новофедоровка)',
    'р. Белая (Андреевка)',
    'р. Белая (Арский Камень)',
    'р. Белая (Бирск)',
    'р. Белая (Ишимбай)',
    'р. Белая (Кушнаренково)',
    'р. Белая (Охлебинино)',
    'р. Белая (Старосубхангулово)',
    'р. Белая (Сыртланово)',
    'р. Белая (Уфа)',
    'р. Белая (ж-д станция Шушпа)',
    'р. Большой Ик (Мраково)',
    'р. Быстрый Танып (Алтаево)',
    'р. Инзер (Азово)',
    'р. Лемеза (Нижние Лемезы)',
    'р. Нугуш (Андреевский)',
    'р. Нугуш (Новосеитово)',
    'р. Сарс (Султанбеково)',
    'р. Стерля (Отрадовка)',
    'р. Тюй (Гумбино)',
    'р. Уршак (Ляхово)',
    'р. Усень (Туймазы)',
    'р. Уфа (Верхний Суян)',
    'р. Уфа (Караидель)',
    'р. Уфа (Красная горка)',
    'р. Уфа (Муллакаево)',
    'р. Уфа (Уровень верхнего бьефа Павловка)',
    'р. Уфа (Уровень нижнего бьефа Павловка)',
    'р. Уфа (Шакша)',
    'р. Чермасан (Новоюмраново)',
    'р. Юрюзань (Атняш)',
    'р. Юрюзань (Чулпан)',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
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
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'р. Ай (Метели)'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

