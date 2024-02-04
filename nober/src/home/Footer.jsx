import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className='mb-0 md:flex grid grid-cols-2 w-full justify-around mt-10 bg-purple-500'>
            <div className=''>
                <h1 className='text-neutral-300 font-bold'>Quick Links</h1>
                <ol className='disc-list'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Donations</a></li>
                    <li><a href="">Membership</a></li>
                </ol>
            </div>
            <div className=''>
                <h1 className='text-neutral-300 font-bold'>More Contacts</h1>
                <ol className='disc-list'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Donations</a></li>
                    <li><a href="">Membership</a></li>
                </ol>
            </div>
            <div className=''>
                <h1 className='text-neutral-300 font-bold'>Social Media</h1>
                    <div><a href="https://web.facebook.com/?_rdc=1&_rdr" target={'_blank'}  ></a>FaceBook</div>
                    <div><a href="https://www.instagram.com/" target={'_blank'}  >Instagram</a></div>
                    <div><a href="https://web.whatsapp.com/" target={'_blank'} >Whatsapp</a></div>
                    <div><a href="https://twitter.com/mainanorbert2" target={'_blank'} >Twitter</a></div>


            </div>
        </div>
    )
}

export default Footer