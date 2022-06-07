import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {Fab} from "@mui/material";

import FeedIcon from '@mui/icons-material/Feed';

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function Information() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab size="small" color="primary" aria-label="add" onClick={handleClickOpen}>
                <FeedIcon/>
            </Fab>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Памятка<br/> Действия населения в случае угрозы или возникновения паводка
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <b>Наводнение</b> — это затопление территории водой в короткий срок во время половодья, паводка
                        или
                        ливневых дождей, при прорыве гидротехнических сооружений.
                    </Typography>
                    <Typography gutterBottom>
                        <b>Как предупредить подтопление:</b>
                    </Typography>
                    <Typography>
                        <li>Оценить границы возможного подтопления;</li>
                        <li>Очистить придомовую территорию от снега;</li>
                        <li> Сделать водоотводы от вашего дома в сточные канавы или водоперепускные трубы
                            (коллекторы);
                        </li>
                        <li> Очистить существующие водоотводы (лотки), находящиеся на придомовой территории или рядом с
                            ней
                            от снега, льда, мусора;
                        </li>
                        <li>При обнаружении неисправности водоперепускных труб (коллекторов) вблизи вашего дома (забития
                            снегом, льдом, мусором) — обратиться в службу коммунального комплекса и сообщить дежурному
                            ЕДДС
                            муниципального образования по телефону - 112;
                        </li>
                        <li>Предусмотреть водооткачивающие средства: бытовые электронасосы, ведра, лопаты и т.д.</li>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Хорошо
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
