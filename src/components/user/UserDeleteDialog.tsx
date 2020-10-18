import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {deleteUser} from "../../redux/users/users.actions";
import {User} from "../../types/userTypes";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";

type Props = {
    userToEdit: User,
    open: boolean,
    onClose: () => void
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        boxSizing: 'border-box',
    }
}));

export const UserDeleteDialog = (props: Props) => {
        const classes = useStyles();
        const dispatch = useDispatch();
        const { t } = useTranslation();
        const { open, onClose, userToEdit } = props;

        const handleSubmit = () => {
            dispatch(deleteUser(userToEdit.id));
            onClose();
        };

        return(
            <div  className={classes.root}>
                <Dialog open={open} onClose={onClose}>
                    <DialogTitle>{t('Delete confirmation')}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{t('Delete confirmation text', { fullName: `${userToEdit.firstName} ${userToEdit.lastName}`})}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            {t('Cancel')}
                        </Button>
                        <Button onClick={handleSubmit} color="primary" autoFocus>
                            {t('OK')}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };
