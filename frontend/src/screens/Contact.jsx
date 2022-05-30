import React from "react";
// import './contact.css';
import Whatsapp from '../images/whatsapp.png';
import Instagram from '../images/instagram.png';
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';

const Contact = ()=>{
    return(
        <div className="pt-5">
            <p style={{textAlign:'center',textDecoration:'underline'}}><b>Let's Talk</b></p>
            <p>Want to get in touch or talk about a <b>project</b>? Feel free to contact me via email at <a href="mailto:itzemedev@gmail.com" target='_blank'>itzemedev@gmail.com </a></p>
            <p style={{textAlign:'center',textDecoration:'underline'}}><b>Let's go social</b></p>
            <p>You may also reach me on
            <span>
                <a href="https://wa.me/2347040169179" target='_blank'><img src={Whatsapp}/></a>,
                <a href="https://www.instagram.com/emeduduna/" target='_blank'><img src={Instagram}/></a>,
                <a href="https://www.facebook.com/Emeduduna Akerejola" target='_blank'><img src={Facebook}/></a>,and 
                <a href="https://twitter.com/emeduduna" target='_blank'><img src={Twitter} width='48px' height='48px'/></a>
            </span>
            </p>
        </div>
    )
}

export default Contact