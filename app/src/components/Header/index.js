import React from 'react';
import { Link } from 'react-router-dom';
  
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import './index.scss'
export default function Header () {
    return (<AppBar className="header" position="static">
        <Toolbar>
            <Link to='/'><Typography variant="body1">Home</Typography></Link>
            <Link to='/favoritos'><Typography variant="body1">Favoritos</Typography></Link>
        </Toolbar>
    </AppBar>);
}