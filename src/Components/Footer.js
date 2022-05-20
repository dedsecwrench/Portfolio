import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div style={{ borderTop: "1px solid #706e6e" }}>

            <div className='About'>
                CONTACT
            </div>
            <div className='container'>
                <div className='portfolio'>To get in Touch</div>
            </div>
            <div className='line3'></div>

            <div className='container firstBlock'>
                <div className='socialBox'>
                    <div className='socialButton ig' style={{ color: "#E1306C" }}>
                        <a href="https://www.instagram.com/dedsecwrench/" target="_blank" style={{ textDecoration: "none", color: "#E1306C" }}>
                            <InstagramIcon />
                        </a>
                    </div>
                    <div className='socialButton mail'>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=dedsec9902@gmail.com" target="_blank" style={{ textDecoration: "none", color: "rgb(255, 65, 65)" }}>
                            <MailOutlineIcon style={{ color: "rgb(255, 65, 65)" }} />
                        </a>
                    </div>
                    <div className='socialButton fb' style={{ color: "#445ef2" }}>
                        <a href="" target="_blank" style={{ textDecoration: "none", color: "#445ef2" }}>
                            <FacebookIcon />
                        </a>
                    </div>
                    <div className='socialButton li' style={{ color: "#0072b1" }}>
                        <a href="https://www.linkedin.com/in/nameera-pathan-ba17811b1/" target="_blank" style={{ textDecoration: "none", color: "#0072b1" }}>
                            <LinkedInIcon />
                        </a>
                    </div>
                    <div className='socialButton twt' style={{ color: "#00acee" }}>
                        <a href="https://twitter.com/__ded_sec_" target="_blank" style={{ textDecoration: "none", color: "#00acee" }}>
                            <TwitterIcon />
                        </a>
                    </div>
                </div>

                <label className='l1'>Instagram</label>
                <label className='l2'>Gmail</label>
                <label className='l3'>Facebook</label>
                <label className='l4'>LinkedIn</label>
                <label className='l5'>Twitter</label>

            </div>

            <div className='lastBlock'>
                &#169; Copyright 2022 Nameera Pathan
            </div>

        </div>
    )
}

export default Footer