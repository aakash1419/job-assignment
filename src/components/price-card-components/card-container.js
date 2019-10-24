import React from 'react';
import { AmountScheduler } from './amount-scheduler';
import { AmountCard } from './amount-card';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) =>
    createStyles({
        cardHolder:{
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: '#F7F8FA',
            padding: '70px 0px 70px 55px'
        }
    })
)
export const CardContainer = () => {
    const classes = useStyles();
    const AmountCard1 = {
        name: 'Basic',
        amount: '20',
        description: 'Basic includes everything you need to start sending messages to your customers.',
        features: ['Send Unlimited Emails',
                    'Send SMS, Push, Webhook',
                    'Technical Support'  
                  ],
        button: 'Try it for 30 days'          

    }
    const AmountCard2 = {
        name: 'Premium',
        amount: '995',
        description: 'Premium adds a customer success manager, deliverability control + all basic features.',
        features: ['Send Unlimited Emails',
                    'Send SMS, Push, Webhook',
                    'Technical Support'  
                  ],
        button: 'Request a Demo'          
    }
    return(
        <div className={classes.cardHolder}>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <div><AmountScheduler /></div>
                </Grid>
                {/* <Grid item md={4}>
                    <AmountCard details={AmountCard1} />
                </Grid>
                <Grid item md={4}>
                    <AmountCard details={AmountCard2} />
                </Grid> */}
                <Grid item md={7}>
                    <Grid container spacing={2}>
                        <Grid item md={5}>
                            <AmountCard details={AmountCard1} />
                        </Grid>
                        <Grid item md={5}>
                            <AmountCard details={AmountCard2} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}