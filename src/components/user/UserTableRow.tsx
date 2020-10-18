import React, {ReactElement, useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import makeStyles from "@material-ui/core/styles/makeStyles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import NewIcon from "@material-ui/icons/FiberNew";
import StarIcon from "@material-ui/icons/Star";
import ValidatedIcon from "@material-ui/icons/CheckCircle";
import { green, yellow, orange } from '@material-ui/core/colors';
import {User, UserState} from "../../types/userTypes";
import {useTranslation} from "react-i18next";
import {UserDetail} from "./UserDetail";


type Props = {
    user: User
    openUserEditDialog: (user: User) => void
    openUserDeleteDialog: (user: User) => void
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
    nowrap: {
        whiteSpace: 'nowrap',
    },
    marginLeft: {
        marginLeft: theme.spacing(2),
    },
    flexBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
    },
    detailRoot: {
        backgroundColor: theme.palette.background.default
    }
}));

export const UserTableRow = (props: Props) => {
    const { user, openUserEditDialog, openUserDeleteDialog } = props;
    const { t } = useTranslation();
    const [openDetail, setOpenDetail] = useState(false);
    const classes = useStyles();

    const getStateIcon = (state: UserState) => {
        const wrapWithTooltip = (icon: ReactElement) => <Tooltip placement="left" title={t(state).toString()}>{icon}</Tooltip>;

        if (state === UserState.NEW) {
            return wrapWithTooltip(<NewIcon style={{ color: orange[500] }} />);
        }

        if (state === UserState.VIP) {
            return wrapWithTooltip(<StarIcon style={{ color: yellow[500] }} />);
        }

        return wrapWithTooltip(<ValidatedIcon style={{ color: green[500] }} />);
    };

    const handleOpenEditForm = () => {
        openUserEditDialog(user);
    };

    const handleOpenDeleteDialog = () => {
        openUserDeleteDialog(user);
    };

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpenDetail(!openDetail)}>
                        {openDetail ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="right">{user.firstName}</TableCell>
                <TableCell align="right">{user.lastName}</TableCell>
                <Hidden xsDown><TableCell align="right">{user.username}</TableCell></Hidden>
                <TableCell align="right">{getStateIcon(user.state)}</TableCell>
                <Hidden xsDown>
                    <TableCell className={classes.nowrap} align="right">
                        <Tooltip placement="left" title={t('Edit').toString()}>
                            <IconButton size="small" onClick={handleOpenEditForm}>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip placement="left" title={t('Delete').toString()}>
                            <IconButton className={classes.marginLeft} size="small" onClick={handleOpenDeleteDialog}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </TableCell>
                </Hidden>
            </TableRow>
            <TableRow className={classes.detailRoot}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openDetail} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <UserDetail user={user}/>
                            <Hidden smUp>
                                <div className={classes.flexBetween}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        aria-label={t('Edit')}
                                        color="primary"
                                        startIcon={<EditIcon />}
                                        onClick={handleOpenEditForm}
                                    >
                                        {t('Edit')}
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        aria-label={t('Delete')}
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                        onClick={handleOpenDeleteDialog}
                                    >
                                        {t('Delete')}
                                    </Button>
                                </div>
                            </Hidden>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};
