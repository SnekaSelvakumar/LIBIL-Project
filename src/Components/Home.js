import React, { useRef } from 'react'
import './Home.css'
import img from './images/book_img.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {Link} from 'react-router-dom';

const Home = () => {
    const ModelRef=useRef();

    function handleOpen(){
        ModelRef.current.showModal();
    }
    function handleClose(){
        ModelRef.current.close();
    }
  return (
    <div>
        <div id="header">
            <div id='header-left'>
                <img src={img} alt="logo" width="100px" height="100px"/>
                <p>LIBIL </p>
            </div>
            <div id='header-right'>
                <button id='btn-1'><Link to='/'>HOME</Link></button>
                <button id='btn-2'><Link to='/about'>ABOUT</Link></button>
                <button id='btn-3' onClick={handleOpen}>LOGIN</button>
            </div>
        </div>
        <dialog ref={ModelRef} >
                <div id='container'>
                    <div id='head'>
                        <IoMdCloseCircleOutline onClick={handleClose} fill='red' />
                    </div>
                    <h3 id='login'>Login</h3>
                    <form>
                        <label >User Name  </label>
                        <input type="text" placeholder='enter username' required/><br/><br />

                        <label >Password  </label>
                        <input type="password" placeholder='enter password' required/><br/><br />

                        <input type="submit" />

                    </form>
                </div>
        </dialog>
        <div style={{backgroundColor:"bisque",bottom:"0",left:"0",width:"100%",position:"fixed", color:"black",textAlign:"center"}}>
            <h5>LIBIL E-BOOKS</h5>
            <p>Read Anywhere At Anytime</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{marginLeft:"20px"}}>
                    <p>Copyright@2024|Libil Books</p>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",columnGap:"20px" ,marginRight:"20px"}}>
                    <CiFacebook />
                    <FaInstagram />
                    <FaSquareXTwitter />
                    <FaWhatsapp />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home