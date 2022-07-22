import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="my-5">
            <h5 className="text-center">Copyright &copy; {year} Genius Car Service</h5>
        </footer>
    );
};

export default Footer;