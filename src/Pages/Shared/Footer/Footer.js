import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4'>
            <p><small>© Copyright | {year} </small></p>
        </footer>
    );
};

export default Footer;