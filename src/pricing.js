import React from 'react';
import Title from './components/title-line';
import { makeStyles, createStyles } from '@material-ui/core';
import { CardContainer } from './components/price-card-components/card-container';
import { CostEstimation } from './components/cost-estimation';
import { FAQ } from './components/faq';
import { GetStarted } from './components/get-started';
import { Footer } from './components/footer';

const useStyles = makeStyles((theme) =>
    createStyles({
        componentsContainer: {
            marginTop: '100px'
        }
    })
)

const Pricing = () =>{
    const classes = useStyles();
    return(
        <div>
            <div className={classes.componentsContainer}>
                <Title />
                <CardContainer AmountCardDetails />
                <CostEstimation />
                <FAQ />
                <GetStarted />
                <Footer />
            </div>
        </div>
    );
}
export default Pricing;