import React from 'react';
import { makeStyles, createStyles, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        images: {
            width: '153px',
            height: '52px'
        },
        mainContainer: {
            backgroundColor: '#F7F8FA',
            padding: '70px 0px ',
            height: '420px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        heading: {
            fontSize: '32px',
            fontWeight: '400',
            color :'#2f326a',
            lineHeight: '42px'
        },
        description: {
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: '400',
            color: '#6e6f80'
        },
        button: {
            width: '183px',
            height: '58px',
            backgroundColor: '#7131ff',
            color:'#fff',
            backgroundImage: 'linear-gradient(45deg,#7131ff 40%,#af64ff);'
        }
    })
)

export const GetStarted = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.mainContainer}>
            <div className={classes.heading}>Get Started</div>
            <div className={classes.description}>Explore why 1,300+ companies trust their messaging to Customer.io</div>
            <Button className={classes.button} variant='contained'>TRY IT FREE</Button>
            <Grid container spacing={2}>
                <Grid item md={2}>
                    <img
                        src={require('../files/codecademy.svg')}
                        className={classes.images}
                        alt='codecademy'
                    />
                </Grid>
                <Grid item md={2}>
                    <img
                        src={require('../files/segment.svg')}
                        className={classes.images}
                        alt='segment'
                    />
                </Grid>
                <Grid item md={2}>
                    <img
                        src={require('../files/ifttt.svg')}
                        className={classes.images}
                        alt='ifttt'
                    />
                </Grid>
                <Grid item md={2}>
                    <img
                        src={require('../files/shutterstock.svg')}
                        className={classes.images}
                        alt='shhutterstock'
                    />
                </Grid>
                <Grid item md={2}>
                    <img
                        src={require('../files/reddit.svg')}
                        className={classes.images}
                        alt='reddit'
                    />
                </Grid>
                <Grid item md={2}>
                    <img
                        src={require('../files/the-knot.svg')}
                        className={classes.images}
                        alt='the-knot'
                    />
                </Grid>
            </Grid>
        </div>
    );
}