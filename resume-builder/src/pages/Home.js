import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import './home.css';

import mainImg from '../assets/landingImg.jpg'
import logo from '../assets/logo_with_text.png'

export default function Home() {

    const navigate = useNavigate();

    function handleClick() {
     navigate("create");
    }
    

    return (
        <div className="main">
            <img src={logo} alt="Rzume"/>
            <div className="main-container">
                <div className="main-description">
                    <h1>An easy n' fast method to create an exceptional resume.</h1>
                    <p>Create the best and amazing with us.</p>
                    <Button onClick={handleClick}>Create Resume</Button>
                </div>
                <div className="img-container">
                    <img src={mainImg} alt="Rzume"/>
                </div>
            </div>  
                       
        </div>
    )
  }