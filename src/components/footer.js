import React from 'react';
import { makeStyles, createStyles, Grid } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) =>
    createStyles({
        footerHead: {
            fontSize:'20px',
            color: '#2f326a',
            fontWeight: '400',
            lineHeight: '28px',
            height: '40px'
        },
        footerTabs: {
            display: 'flex',
            flexDirection: 'column'
        },
        mainContainer: {
            padding: '70px 332px'
        },
        links: {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '26px',
            color: '#5f607b',
            height: '35px'
        },
        linkBox: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left'
        },
        iconBox: {
            display: 'flex',
            justifyContent: 'space-around',
            padding: '0px 192px',
            marginTop: '65px',
            color: '#6E6F80'
        }
    })
)

export const Footer = () => {
    const classes = useStyles();
    const FooterLinks = [
        {
            name: 'Product',
            link1: 'Features',
            link2: 'Pricing',
            link3: 'Integrations',
            link4:'Platform Status'
        },
        {
            name: 'Learn',
            link1: 'Help Docs',
            link2: 'Api Docs',
            link3: 'Blog',
            link4: ''
        },
        {
            name:'Company',
            link1: 'About',
            link2: 'Careers',
            link3: 'Customers',
            link4: ''
        },
        {
            name: 'Resources',
            link1: 'Contact Us',
            link2: 'Support',
            link3: 'Partners',
            link4:'Attend a Demo'
        }

    ]
    return(
        <div className={classes.mainContainer}>
            <Grid container>
                {
                    FooterLinks.map((item, index) => (
                        <Grid item md={3} key={index}>
                            <div className={classes.linkBox}>
                                <div className={classes.footerHead}>{item.name}</div>
                                <div className={classes.footerTabs}>
                                    <span className={classes.links}>{item.link1}</span>
                                    <span className={classes.links}>{item.link2}</span>
                                    <span className={classes.links}>{item.link3}</span>
                                    <span className={classes.links}>{item.link4}</span>
                                </div>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
            <div className={classes.iconBox}>
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <LocationOnIcon />
                <MailOutlineIcon />
            </div>
        </div>
    );
} 