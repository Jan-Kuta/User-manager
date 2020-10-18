import React, {ReactElement, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SuccessIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper';
import {Address, User, UserState} from "../../types/userTypes";
import {useTranslation} from "react-i18next";
import makeStyles from '@material-ui/core/styles/makeStyles';
import Formsy from 'formsy-react';
import {InputFormsy} from "../formsy/InputFormsy";
import {SelectFormsy} from "../formsy/SelectFormsy";
import {MenuItem} from "@material-ui/core";
import {CheckboxFormsy} from "../formsy/CheckboxFormsy";
import {IModel} from "formsy-react/dist/interfaces";
import {UsersActions} from "../../redux/users/usersActionTypes";

type Props = {
    onCancel: () => void
    onSubmit: (model: any) => UsersActions
    initialValues: Partial<User>
    header: ReactElement
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    gutterBottom: {
        marginBottom: theme.spacing(2),
    },
    flex: {
        display: 'flex',
    },
    fullWidth: {
        flex: '1 1 100%',
    },
    flexBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
    },
}));

export const UserForm = (props: Props) => {
    const { t } = useTranslation();
    const formRef = useRef<Formsy | null>(null);
    const { onCancel, onSubmit, initialValues, header } = props;
    const dispatch = useDispatch();
    const [addresseDiffer, setAddressesDiffer] = useState(!!initialValues.contactAddress || false);
    const classes = useStyles(props);
    const [canSubmit, setCansubmit] = useState(false);

    const handleSubmit = (model: IModel) => {
        dispatch(onSubmit(model));
        onCancel()
    };

    const handleCancel = () => {
        onCancel();
    };

    const handleChange = (model:any) => {
        setAddressesDiffer(model.addressesDiffer);
    };

    const renderSectionTitle = (titleKey: string) => (
        <Grid item xs={12} className={classes.flex}>
            <Typography variant="h6" gutterBottom component="div">
                {t(titleKey)}
            </Typography>
        </Grid>
    );

    const renderTextInput = (required: boolean, name: string, labelKey: string, value?: string) => (
        <Grid item xs={12} sm={6}>
            <InputFormsy
                fullWidth
                className={classes.gutterBottom}
                variant="outlined"
                value={value}
                required={required}
                name={name}
                label={t(labelKey)}
                validationError={t('Field is required')}
            />
        </Grid>
    );

    const renderSelect = (keys: string[], required: boolean, name: string, labelKey: string, value?: string) => (
        <Grid item xs={12} sm={6}>
            <SelectFormsy
                fullWidth
                className={classes.gutterBottom}
                value={value}
                required={required}
                name={name}
                label={t(labelKey)}
                validationError={t('Field is required')}
            >
                {keys.map(key => (
                    <MenuItem key={key} value={key}>
                        {t(key)}
                    </MenuItem>
                ))}
            </SelectFormsy>
        </Grid>
    );

    const renderAddress = (prefix: 'Contact' | 'Permanent', initVal?: Address) => (
        <>
            {renderSectionTitle(`${prefix} address`)}
            {renderTextInput(true, `${prefix.toLowerCase()}Street`, 'Street', initVal?.street)}
            {renderTextInput(true, `${prefix.toLowerCase()}City`, 'City', initVal?.city)}
            {renderTextInput(true, `${prefix.toLowerCase()}Zip`, 'Zip', initVal?.zip)}

        </>
    );

    return (
        <Paper className={classes.root}>
            <Formsy
                className={classes.fullWidth}
                onValidSubmit={handleSubmit}
                mapping={null}
                onInvalidSubmit={handleSubmit}
                onChange={handleChange}
                onValid={() => setCansubmit(true)}
                onInvalid={() => setCansubmit(false)}
                disabled={false}
                ref={formRef}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12} className={classes.flex}>
                        {header}
                    </Grid>
                    {renderSectionTitle('Basic info')}
                    {renderTextInput(true, 'firstname', 'Firstname', initialValues.firstName)}
                    {renderTextInput(true, 'lastname', 'Lastname', initialValues.lastName)}
                    {renderTextInput(true, 'username', 'Username', initialValues.username)}
                    {renderSelect(Object.keys(UserState).map(k => `STATE_${k}`), true, 'state', 'State', initialValues.state)}
                    {renderTextInput(true, 'email', 'Email', initialValues.email)}
                    {renderTextInput(true, 'phone', 'Phone', initialValues.phone)}
                    {renderAddress('Permanent', initialValues.permanentAddress)}
                    <Grid item xs={12}>
                        <CheckboxFormsy value={!!initialValues.contactAddress || false} name="addressesDiffer" label={t('Addresses differ')} />
                    </Grid>
                    {addresseDiffer && renderAddress('Contact', initialValues.contactAddress)}
                    <Grid item xs={12}>
                        <div className={classes.flexBetween}>
                            <div onClick={() => formRef.current?.setFormPristine(false)}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    startIcon={<SuccessIcon />}
                                    type="submit"
                                    disabled={!canSubmit}
                                    color="primary"
                                >
                                    {t('Submit')}
                                </Button>
                            </div>
                            <Button
                                variant="contained"
                                size="small"
                                startIcon={<CancelIcon />}
                                color="secondary"
                                onClick={handleCancel}
                            >
                                {t('Cancel')}
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Formsy>

        </Paper>
    )
};
