import React from 'react';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {UserTable} from "./user/UserTable";
import {RootState} from "../redux/rootReducer";
import {useSelector} from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        boxSizing: 'border-box',
    }
}));

export const UserListPage = () => {
    const users = useSelector((state: RootState) => state.users.data);
    const loading = useSelector((state: RootState) => state.users.loading);
    const error = useSelector((state: RootState) => state.users.error);
    const classes = useStyles();

    if (loading) {
        return <LinearProgress />;
    }

    if (error) {
        return <h1>API PROBLEM</h1>
    }

    return(
        <div  className={classes.root}>
            <Container maxWidth="md">
                <UserTable users={users}/>
            </Container>
        </div>
    );
};
