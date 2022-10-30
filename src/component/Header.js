import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/header.css'
import logo from '../image/images.png'
import LanguageIcon from '@mui/icons-material/Language';
import ReorderIcon from '@mui/icons-material/Reorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {

    return (
        <div className="header">
            <div className="leftsideheader">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            alt=""
                            className="headerlogo"
                        />{' '}
                    </Navbar.Brand>
                </Container>
            </div>
            <div className="rightsideheader">
                <div className="link">Become a host</div>
                <div className="icon"><LanguageIcon /></div>
                <button className="headerbutton"><ReorderIcon /><AccountCircleIcon /></button>
            </div>
        </div>
    );
}

export default Header;