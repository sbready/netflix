import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const Loader = ({ classes }) => (
    <div className={classes.container}>
        <CircularProgress className={classes.loader} size={200} thickness={2} />
    </div>
);

const styles = {
    container: {
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        color: '#404040',
    },
};

export default withStyles(styles)(Loader);