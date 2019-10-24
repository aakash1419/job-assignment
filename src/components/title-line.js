import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';


const useStyles = makeStyles((theme)=>
    createStyles({
        title: {
            fontSize: '12px',
            color: '#6e6f80'
        },
        slogan: {
            fontSize: '40px',
            fontWeight: '700',
            color: '#2F326A' 
        },
        titleBox: {
            backgroundColor: '#F7F8FA',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height :'184px'
        }
    })
)

const Title = () => {
    const classes = useStyles();
    return(
        <div className={classes.titleBox}>
            <div className={classes.title}>Pricing</div>
            <div className={classes.slogan}>Pricing That Scales as You Do</div>
        </div>
    );
}
export default Title;