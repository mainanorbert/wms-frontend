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
                    <li><Link to="">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to="">Donations</Link></li>
                    <li><Link to="">Membership</Link></li>
                </ol>
            </div>
            <div className=''>
                <h1 className='text-neutral-300 font-bold'>More Contacts</h1>
                <ol className='disc-list'>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="">Donations</Link></li>
                    <li><Link to="">Membership</Link></li>
                </ol>
            </div>
            <div className=''>
                <h1 className='text-neutral-300 font-bold'>Social Media</h1>
                    <div><Link to="https://web.facebook.com/?_rdc=1&_rdr" target={'_blank'}  ></Link>FaceBook</div>
                    <div><Link to="https://www.instagram.com/" target={'_blank'}  >Instagram</Link></div>
                    <div><Link to="https://web.whatsapp.com/" target={'_blank'} >Whatsapp</Link></div>
                    <div><Link to="https://twitter.com/mainanorbert2" target={'_blank'} >Twitter</Link></div>


            </div>
        </div>
    )
}

export default Footer