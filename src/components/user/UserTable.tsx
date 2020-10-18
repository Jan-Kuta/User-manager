import React, {useState} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import UsersIcon from '@material-ui/icons/SupervisedUserCircle';
import Hidden from '@material-ui/core/Hidden';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import {User} from "../../types/userTypes";
import {UserTableRow} from "./UserTableRow";
import {useTranslation} from "react-i18next";
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Link} from "react-router-dom";
import {UserEditDialog} from "./UserEditDialog";
import {UserDeleteDialog} from "./UserDeleteDialog";

type Props = {
    users: User[]
}

const useStyles = makeStyles((theme) => ({
    toolbarTitle: {
        display: 'flex',
        flex: '1 1 100%'
    },
    toolbarTitleIcon: {
        marginRight: theme.spacing(2)
    },
    tableContainer: {
        maxHeight: '80vh'
    },
    tableHeader: {
        '& th': {
            backgroundColor: theme.palette.background.paper
        }
    }
}));

export const UserTable = (props: Props) => {
    const { users } = props;
    const { t } = useTranslation();
    const classes = useStyles(props);
    const [page, setPage] = useState(0);
    const [isOpenUserEditDialog, setOpenUserEditDialog] = useState(false);
    const [isOpenUserDeleteDialog, setOpenUserDeleteDialog] = useState(false);
    const [managingUser, setManagingUser] = useState<User | null>(null);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleOpenUserEditDialog = (user: User) => {
        setManagingUser(user);
        setOpenUserEditDialog(true);
    };

    const handleOpenUserDeleteDialog = (user: User) => {
        setManagingUser(user);
        setOpenUserDeleteDialog(true);
    };

    const handleCloseUserEditDialog = () => setOpenUserEditDialog(false);

    const handleCloseUserDeleteDialog = () => setOpenUserDeleteDialog(false);

    return (
        <>
            <Paper>
                <Toolbar>
                        <div className={classes.toolbarTitle}>
                            <UsersIcon className={classes.toolbarTitleIcon} />
                            <Typography variant="h6" id="tableTitle" component="div">
                                {t('User list')}
                            </Typography>
                        </div>
                        <Link to='/users/create'>
                            <Tooltip placement="left" title={t('Add user').toString()}>
                                <IconButton aria-label="add user">
                                    <PersonAddIcon />
                                </IconButton>
                            </Tooltip>
                        </Link>
                </Toolbar>
                <TableContainer className={classes.tableContainer}>
                    <Table aria-label="collapsible table" size="small" stickyHeader>
                        <TableHead className={classes.tableHeader}>
                            <TableRow>
                                <TableCell />
                                <TableCell align="right">{t('Firstname')}</TableCell>
                                <TableCell align="right">{t('Lastname')}</TableCell>
                                <Hidden xsDown>
                                    <TableCell align="right">{t('Username')}</TableCell>
                                </Hidden>
                                <TableCell align="right">{t('State')}</TableCell>
                                <Hidden xsDown>
                                    <TableCell align="right">{t('Actions')}</TableCell>
                                </Hidden>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                                <UserTableRow
                                    key={user.id}
                                    user={user}
                                    openUserEditDialog={handleOpenUserEditDialog}
                                    openUserDeleteDialog={handleOpenUserDeleteDialog}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    backIconButtonText={t('Back')}
                    nextIconButtonText={t('Next')}
                    labelRowsPerPage={t('Rows per page')}
                    labelDisplayedRows={({ from, to, count }) => `${from} - ${to} ${t('Of')} ${count}`}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            {managingUser && <UserEditDialog userToEdit={managingUser} open={isOpenUserEditDialog} onClose={handleCloseUserEditDialog}/>}
            {managingUser && <UserDeleteDialog userToEdit={managingUser} open={isOpenUserDeleteDialog} onClose={handleCloseUserDeleteDialog}/>}
        </>
    )
};
