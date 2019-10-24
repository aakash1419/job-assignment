import React from 'react';
import { makeStyles, createStyles, Paper, Button, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => 
    createStyles({
        amountCard: {
            maxWidth: '338px',
            height: '566px'
        },
        paper: {
            height: '100%',
            padding: '60px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        name: {
            fontSize: '20px',
            fontWeight: '400',
            color: '#2f326a',
            display: 'flex',
            lineHeight: '28px'
        },
        amount: {
            fontSize: '64px',
            fontWeight: '400',
            color: '#2f326a',
            display: 'flex',
            
        },
        description: {
            fontSize: '16px',
            fontWeight: '400',
            color: '#6e6f80',
            display :'flex',
            textAlign: 'left',
            lineHeight: '26px'
        },
        featureBox: {
            display: 'flex',
            marginTop: '20px',
            flexDirection: 'column'
        },
        checkIcon: {
            display: 'flex', 
            width: '40px',
            fontSize: '16px',
            fontWeight: '400',
            color: '#2f326a'
        },
        featureName: {
            display: 'flex'
        },
        featureItem: {
            fontSize: '16px',
            fontWeight: '400',
            color: '#6e6f80'
        },
        button: {
            backgroundColor: '#2f326a',
            backgroundImage: 'linear-gradient(45deg,#2f326a 40%,#262366);',
            color: '#fff',
            width: '228px',
            height: '58px',
            textTransform: 'capitalize',
            fontSize: '12px',
            fontWeight: '400'
        },
        amountHolder: {
            display: 'flex'
        },
        amountTagLine: {
            display: 'flex',
            alignItems: 'flex-end'
        },
        dollarSign: {
            fontSize: '30px',
            fontWeight: '400',
            lineHeight: '33px',
            color: '#2f326a',
            paddingTop: '9px'
        },
        tagLine: {
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            color: '#6e6f80'
        }
    })
)

export const AmountCard = (props) => {
    const classes = useStyles();
    console.log(props);
    return(
        <div className={classes.amountCard}>
            <Paper className={classes.paper}>
                <div className={classes.name}>{props.details.name}</div>
                <div className={classes.amountHolder}>
                    <div><Typography className={classes.dollarSign}>$</Typography></div>
                    <div className={classes.amount}><Typography className={classes.amount}>{props.details.amount}</Typography></div>
                    <div className={classes.amountTagLine}><Typography className={classes.tagLine}>per month base</Typography></div>
                </div>
                <div className={classes.description}>{props.details.description}</div>
                <div className={classes.featureBox}>
                    {
                        props.details.features.map((item, index) => (
                            <div className={classes.featureName}>
                                <div className={classes.checkIcon}><CheckIcon /></div>
                                <div className={classes.featureItem}>{item}</div>
                            </div>
                        ))
                    }
                </div>
                <Button className={classes.button} variant='contained'>{props.details.button}</Button>
            </Paper>
        </div>
    );
}