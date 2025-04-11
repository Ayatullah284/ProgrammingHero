import React from 'react';

const Footer = () => {
    return (
        <div className='text-center items-center my-30'>
            <div className="flex mx-145 mb-3">
                <a className=" text-xl cursor-pointer">
                    <span className='text-[#003ea3] text-2xl'>Auction</span>
                    <span className='text-[#fad255] text-3xl font-bold'>Gallery</span> </a>
            </div>
            <div className='flex justify-around mx-150 mb-3'>
                <p>Bid.</p>
                <p>Win.</p>
                <p>Own.</p>
            </div>
            <div className='flex justify-around mx-110 mb-10'>
                <p>Home</p>
                <p>Auctions</p>
                <p>Categories</p>
                <p>How to works</p>
            </div>
            <p><span>© 2025 AuctionHub. All rights reserved.</span></p>
        </div>
    );
};

export default Footer;