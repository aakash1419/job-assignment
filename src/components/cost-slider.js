import React from 'react';
import { makeStyles, createStyles,Slider } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        priceLine: {
            fontSize: '16px',
            fontWeight: '400',
            color: '#6e6f80',
            lineHeight: '26px',
            height: '79px'
        },
        sliderContainer: {
            width: '900px'
        }
    })
)

export const CostSlider = () => {
    const classes = useStyles();
    return(
        <div className={classes.sliderContainer}>
            <div className={classes.priceLine}>For 0 to 12,000 profiles, you would pay $150 per month.</div>
            <Slider />
        </div>
    );
}