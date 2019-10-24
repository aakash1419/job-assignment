import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Link, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) =>
    createStyles({
        appbar: {
            backgroundColor: '#fff',
            position: 'fixed'
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            height: '100px',
            //backgroundColor: '#F7F8FA'
        },
        tabs: {
            color: '#6e6f80',
            display: 'flex',
            height: '100px'
        },
        textButton: {
            fontSize: '15px',
            textTransform: 'capitalize',
            color: '#66677d',
            fontWeight: '400',
            padding: '0px 20px'
        },
        shadowRemover: {
            boxShadow: 'none'
        },
        logo: {
            width: '200px',
            height: '37px'
        },
        tryButton: {
            width: '115px',
            height: '34px',
            backgroundColor: '#7131ff',
            color:'#fff',
            backgroundImage: 'linear-gradient(45deg,#7131ff 40%,#af64ff);'
        },
        indicator: {
            height: '3px',
            maxWidth: '85px',
            marginLeft: '2px',
            marginBottom: '97px',
            backgroundColor: '#2f326a'
        },
        flexContainer: {
            marginTop: '23px',
            display: 'flex',
            justifyContent: 'center'
        },
        wrapper: {
            fontSize: '15px',
            fontWeight: '400',
            color: '#66677d',
            textTransform: 'capitalize',
            width: '86px'
        },
        root: {
            minWidth: '86px',
            padding: '0px'
        }

    })
)

export const NavBar = () => {
    const classes = useStyles();
    const [color , setColor] = useState('#F7F8FA');
    const [value, setValue] = useState(1);
    const [elevation, setElevation] = useState(0);

    const listenScroll = () => {
        if(window.scrollY > 100) {
            setColor('#fff');
            setElevation(1);
        }else {
            setColor('#F7F8FA')
            setElevation(0);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScroll)
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    
    
    const NavTabs = [
        {title: 'Features', url: '/features'},
        {title: 'Pricing', url: 'pricing'},
        {title: 'Customers', url: 'customers'},
        {title: 'Docs', url: 'docs'}
    ]
    return(
        <AppBar style={{backgroundColor: color}} onScroll={listenScroll} elevation={elevation} className={classes.appbar}>
            <Toolbar style={{backgroundColor: color}} onScroll={listenScroll} className={classes.toolbar}>
                <div>
                    <Link to='/'>
                        <img
                            src={require('../files/logo.svg.svg')}
                            className={classes.logo}
                            alt='logo'
                         />
                    </Link>
                </div>
                <div className={classes.tabs}>
                    <Tabs value={value} onChange={handleChange} classes={{indicator: classes.indicator, flexContainer: classes.flexContainer}} >
                    {
                        NavTabs.map((item, index, key) => (
                                    <Tab key={index} label={item.title} value={index} classes={{wrapper: classes.wrapper, root: classes.root}}  />
                                    ))
                                }
                    </Tabs> 
                </div>
                <div>
                    <Button className={classes.textButton}>Sign In</Button>
                    <Button className={classes.tryButton} variant= 'contained'>TRY IT FREE</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}