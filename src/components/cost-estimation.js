import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import {  Button } from '@material-ui/core';
import { CostSlider } from './cost-slider';

const useStyles = makeStyles((theme) =>
    createStyles({
        mainContainer: {
            padding: '70px 200px',
            display: 'flex',
            flexDirection: 'column',
            height: '537px',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        title: {
            fontSize: '40px',
            fontWeight: '400',
            color: '#2f326a',
            lineHeight: '48px'
        },
        button: {
            width: '165px',
            height: '50px',
            backgroundColor: '#7131ff',
            color:'#fff',
            backgroundImage: 'linear-gradient(45deg,#7131ff 40%,#af64ff);'
        }
    })
)

export const CostEstimation = () => {
    const classes = useStyles();
    return(
        <div className={classes.mainContainer}>
            <div className={classes.title}>Estimate Your Basic Plan Costs</div>
            <CostSlider />
            <Button variant='contained' className={classes.button}>TRY IT FREE</Button>
        </div>
    );
}