import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import LogoImage from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='bg-white py-12 px-6'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8'>
                <div className='flex flex-col justify-center items-center'>
                    <Link to='/'><img src={LogoImage} className='w-24 h-24' alt='Logo' /></Link>
                    <p className='text-gray-600 mb-4'>Explore Delicacies, where every recipe is a journey through flavors, crafted to delight your taste buds and inspire your culinary adventures!</p>
                    <div className='flex space-x-4 text-xl'>
                        <Link to="/facebook"><FaFacebookF /></Link>
                        <Link to="/instagram"><FaInstagram /></Link>
                        <Link to="/twitter"><FaTwitter /></Link>
                        <Link to="/github"><FaGithub /></Link>
                        <Link to="/dribbble"><FaDribbble /></Link>
                    </div>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-2 text-primary'>Explore</h3>
                    <ul className='text-gray-600'>
                        <li className='mb-1'><Link to='/recipes'>Recipes</Link></li>
                        <li className='mb-1'><Link to='/about'>About</Link></li>
                        <li className='mb-1'><Link to='/resources'>Resources</Link></li>
                        <li className='mb-1'><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-2 text-primary'>Company</h3>
                    <ul className='text-gray-600'>
                        <li className='mb-1'><Link to='/style-guide'>Style Guide</Link></li>
                        <li className='mb-1'><Link to='/meet-the-team'>Meet the Team</Link></li>
                        <li className='mb-1'><Link to='/accounts-review'>Accounts Review</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-2 text-primary'>Helpful Links</h3>
                    <ul className='text-gray-600'>
                        <li className='mb-1'><Link to='/contact'>Contact</Link></li>
                        <li className='mb-1'><Link to='/faqs'>FAQs</Link></li>
                        <li className='mb-1'><Link to='/live-chat'>Live Chat</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-2 text-primary'>Legal</h3>
                    <ul className='text-gray-600'>
                        <li className='mb-1'><Link to='/accessibility'>Accessibility</Link></li>
                        <li className='mb-1'><Link to='/returns-policy'>Returns Policy</Link></li>
                        <li className='mb-1'><Link to='/refund-policy'>Refund Policy</Link></li>
                        <li className='mb-1'><Link to='/hiring-statistics'>Hiring Statistics</Link></li>
                    </ul>
                </div>
            </div>
            <p className='my-4'>Designed with ♥ by ©Pushkar Prakash</p>
        </div>
    );
}

export default Footer;
