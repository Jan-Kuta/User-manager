import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {UserForm} from "./user/UserForm";
import {addUser} from "../redux/users/users.actions";
import {goBack} from "redux-first-history";
import {useDispatch} from "react-redux";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {useTranslation} from "react-i18next";

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

export const UserCreatePage = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(goBack('/users'));
    };

    return(
        <div  className={classes.root}>
            <Container maxWidth="md">
                <UserForm
                    header={
                        <>
                            <PersonAddIcon className={classes.icon}/>
                            <Typography variant="h5" gutterBottom component="div">
                                {t('Create user')}
                            </Typography>
                        </>
                    }
                    onSubmit={(model: any) => addUser({
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
                    initialValues={{}}
                    onCancel={handleCancel}
                />
            </Container>
        </div>
    );
};
