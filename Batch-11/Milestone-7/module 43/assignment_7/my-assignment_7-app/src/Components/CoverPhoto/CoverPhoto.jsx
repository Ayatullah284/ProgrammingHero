import React from "react";

function CoverPhoto() {
    return (
      <div className="relative w-full h-[500px] ">
        <img 
          src="https://i.ibb.co.com/27jwkHPS/Banner-min.jpg" 
          alt="Cover" 
          className="w-full h-full" 
        />
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            textShadow: '1px 1px 5px black'
          }}
        >
          <h1>Bid on Unique Items from</h1>
          <h1>Around the World</h1>
          <p>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
        </div>
      </div>
    );
  }
  

  export default CoverPhoto;
  