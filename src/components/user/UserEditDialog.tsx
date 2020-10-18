import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {UserForm} from "./UserForm";
import {updateUser} from "../../redux/users/users.actions";
import {User} from "../../types/userTypes";
import {useTranslation} from "react-i18next";


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
    },
    icon: {
        marginRight: theme.spacing(2),
    },
}));

export const UserEditDialog = (props: Props) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { open, onClose, userToEdit } = props;

    return(
        <div  className={classes.root}>
            <Dialog open={open} onClose={onClose}>
                <UserForm
                    header={
                        <>
                            <EditIcon className={classes.icon}/>
                            <Typography variant="h5" gutterBottom component="div">
                                {t('Edit user')}
                            </Typography>
                        </>
                    }
                    onSubmit={(model: any) => updateUser({
                        id: userToEdit.id,
                        firstName: model.firstname,
                        lastName: model.lastname,
                        username: model.username,
                        state: model.state,
                        email: model.email,
                        phone: model.phone,
                        permanentAddress: {
                            street: model.permanentStreet,
                            city: model.permanentCity,
                            zip: model.permanentZip
                        },
                        contactAddress: model.addressesDiffer
                            ? {
                                street: model.contactStreet,
                                city: model.contactCity,
                                zip: model.contactZip
                            }
                            : undefined
                    })}
                    initialValues={userToEdit}
                    onCancel={onClose}
                />
            </Dialog>
        </div>
    );
};
