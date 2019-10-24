import React from 'react';
import { makeStyles, createStyles, Paper, RadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => 
    createStyles({
        scheduleCard: {
            maxWidth: '300px',
            height: '268px'
        },
        paper: {
            height: '100%',
            padding: '60px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        payLine: {
            fontSize: '20px',
            fontWeight: '400',
            color: '#2f326a',
            lineHeight: '28px',
            textAlign: 'left'
        },
        radioButtonBox: {
            marginLeft: '35px'
        }
    })
)

export const AmountScheduler = () => {
    const classes = useStyles();
    return(
        <div className={classes.scheduleCard}>
            <Paper className={classes.paper}>
                <div><Typography className={classes.payLine}>Pay on your schedule</Typography></div>
                <div className={classes.radioButtonBox}>
                    <RadioGroup value={0}>
                        <FormControlLabel control={<Radio />} label='Month-to-Month'/>
                        <FormControlLabel control={<Radio />} label='Annual' />
                    </RadioGroup>
                </div>
                
            </Paper>
        </div>
    );
}