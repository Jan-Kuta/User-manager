import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Address, User} from "../../types/userTypes";
import {useTranslation} from "react-i18next";


type Props = {
    user: User
}

const useStyles = makeStyles((theme) => ({
    subtitle: {
        marginTop: theme.spacing(2),
    },
    label: {
        fontWeight: 'bold',
    },
}));

export const UserDetail = (props: Props) => {
    const { user } = props;
    const { t } = useTranslation();
    const classes = useStyles(props);

    const getItemWithLabel = (labelKey: string, item: string) => (
        <>
            <Grid item xs={6} sm={3} className={classes.label}>{t(labelKey)}:</Grid>
            <Grid item xs={6} sm={3}>{item}</Grid>
        </>
    );

    const renderAddress = (headerKey: string, address?: Address) => {
        if (!address) {
            return null;
        }

        return (
            <>
                <Grid xs={12} item>
                    <Typography className={classes.subtitle} variant="h6">{t(headerKey)}</Typography>
                </Grid>
                {getItemWithLabel('Street', address.street)}
                {getItemWithLabel('City', address.city)}
                {getItemWithLabel('Zip', address.zip)}
            </>
        );
    };

    return (
        <>
            <Grid container spacing={1}>
                <Grid xs={12} item>
                    <Typography variant="h6" gutterBottom component="div">
                        {t('User detail')}
                    </Typography>
                </Grid>
                <Hidden smUp>
                    {getItemWithLabel('Username', user.username)}
                </Hidden>
                {getItemWithLabel('Email', user.email)}
                {getItemWithLabel('Phone', user.phone)}
                {renderAddress('Address', user.permanentAddress)}
                {renderAddress('Contact address', user.contactAddress)}
            </Grid>
        </>
    )
};
