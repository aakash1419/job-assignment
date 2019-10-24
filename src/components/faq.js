import React from 'react';
import { makeStyles, createStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        faqTitle: {
            display: 'flex',
            fontSize: '40px',
            fontWeight: '400',
            color: '#2f326a',
            lineHeight: '48px'
        },
        mainContainer: {
            padding: '70px 40px'
        },
        question: {
            fontSize: '24px',
            fontWeight: '400',
            color: '#2f326a',
            lineHeight: '34px',
            marginTop: '45px',
            marginBottom: '20px'
        },
        answer: {
            fontSize: '16px',
            fontWeight: '400',
            color: '#6e6f80',
            lineHeight: '26px',
            textAlign: 'left',
            paddingRight: '40px'
        }
    })
)

export const FAQ = () => {
    const classes = useStyles();

    const faq = [
        {
            que: 'How many messages are included with Basic?',
            ans: 'On our basic plan, we have a fair use policy of up to 1 million messages per month. This should make it effectively unlimited for 99.9% of customers.'
        },
        {
            que: 'How quickly can I start using my account?',
            ans: 'If you sign up today, you can start integrating and adding to Customer.io immediately. To help combat spam and fraud, we manually review each account before any outbound messages can be sent. That helps maintain our reputation and protects all of our customers.'
        },
        {
            que: 'Does Customer.io own the data I put into the system?',
            ans: 'Nope! Your data stays your data. You are letting us use it in order to deliver a service to you. Please read our privacy policy for more info.'
        },
        {
            que: 'How do you calculate my bill?',
            ans: 'We charge you based on the maximum number of uniquely identified users (profiles) in your account during the month. Each month on the anniversary of your subscription, we will charge the credit card on file.'
        },
        {
            que: 'Do you accept payment by check or wire transfer?',
            ans: 'Yes. Paying by check or wire transfer is possible with a premium plan.'
        }
    ];
    return(
        <div className={classes.mainContainer}>
            <Grid container>
                <Grid item md={12}>
                    <div className={classes.faqTitle}>Frequently Asked Questions</div>
                </Grid>
                {
                    faq.map((item, index) => (
                        <Grid item md={6} xs={12}>
                            <Grid container>
                                <Grid item>
                                    <div className={classes.question}>{item.que}</div>
                                </Grid>
                                <Grid item>
                                    <div className={classes.answer}>{item.ans}</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}