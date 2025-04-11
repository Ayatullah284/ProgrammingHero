import React, { useEffect, useState } from 'react';
import Left from './Left/Left';
import Right from './Right/Right';
import { GiSelfLove } from "react-icons/gi";
import Empty from './Right/Empty';




const Sections = () => {
    const [cards, setCards] = useState([])
    const [herts, setHerts] = useState([])
    const [price, setPrice] = useState(0)
    const [disabledIds, setDisabledIds] = useState([])

    useEffect(()=>{
        fetch("product.json")
        .then(r=> r.json())
        .then(d=> {
            setCards(d)
        })
    },[])

    const handleHert = (card)=>{
        showToast()
        setHerts([card, ...herts])        
        setPrice(price + card.currentBidPrice)
        setDisabledIds(prv=> [...prv, card.id])
    }
    const handleDelete = (id, p)=>{
        const newIds = disabledIds.filter(prv=> prv !== id)
        setDisabledIds(newIds)
        deleteToast()
        const x = herts.filter(hert => hert.id != id)
        setHerts(x)
        setPrice(price - p)
                     
    }

    const showToast = () => {
        const toast = document.createElement("div");
        toast.className = "toast toast-top toast-end";
        toast.innerHTML = `
          <div class="alert alert-info animate-fade-in">
            <span>Add to your Favorite list.</span>
          </div>
        `;
        document.body.appendChild(toast);
    
        setTimeout(() => {
          toast.remove();
        }, 2000);
        
      };
    const deleteToast = () => {
        const toast = document.createElement("div");
        toast.className = "toast toast-top toast-end";
        toast.innerHTML = `
          <div class="alert alert-warning">
            <span>Remove to your Favorite list.</span>
          </div>
        `;
        document.body.appendChild(toast);
    
        setTimeout(() => {
          toast.remove();
        }, 2000);
      };

    if(herts.length !== 0){
        return (
            <div className='bg-[#ebf0f4] px-15 pt-20'>
                <h1 className='text-4xl'>Active Auctions</h1>
                <p>Discover and bid on extraordinary items</p>
                <div className='flex  mt-8'>
                    {/* <div className='grid grid-cols-3 gap-10 mb-10'>
                        {
                            cards.map(card =><Left disabled={disabledIds.includes(card.id)} key={card.id} card={card} handleHert={handleHert}></Left>)
                        }
                    </div> */}
                    <div className=' mb-10 w-4/6'>
                        <div className='bg-[#ffffff] rounded-t-xl text-xl font-bold
                        text-[#151515] flex py-1'>
                            <h1 className='ml-4'>Items</h1>
                            <h1 className='ml-82'>Current Bid</h1>
                            <h1 className='ml-15'>Time Left</h1>
                            <h1 className='ml-10 mr-4'>Bid Now</h1>
                        </div>
                        <hr />
                        {
                            cards.map(card =><Left disabled={disabledIds.includes(card.id)} key={card.id} card={card} handleHert={handleHert}></Left>)
                        }
                    </div>
                    <div className=' ml-10 text-center  rounded-xl w-2/6'>
                        <div className='bg-[#ffffff] rounded-t-xl'>
                            <h1 className='text-3xl font-bold
                        text-[#5391fc]'><GiSelfLove className='inline my-13.5 text-[#e02e45]' size={40}/> Favorite Items</h1>
                        </div>
                        
                        <hr className=''/>
                        { 
                            herts.map(hert => <Right hert={hert} handleDelete={handleDelete} key={hert.id}></Right>)
                         
                        }
                        <div className=' flex pt-8 pb-5 bg-[#ffffff] rounded-b-xl'>
                            <p className='text-xl font-bold ml-10'>Total bids Amount:</p>
                            <p className='text-xl font-bold ml-10'>$<span>{price}</span></p>
                        </div>                        
                    </div>
                </div>
                
            </div>
        );
    }else{
        return (
            <div className='bg-[#ebf0f4] px-15 pt-20'>
                <div className=''>
                    <h1 className='text-4xl'>Active Auctions</h1>
                    <p>Discover and bid on extraordinary items</p>
                </div>
                
                <div className='flex justify-between  mt-8'>
                    {/* <div className='grid grid-cols-3 gap-10 mb-10'>
                        {
                            cards.map(card =><Left key={card.id} card={card} handleHert={handleHert}></Left>)
                        }
                    </div> */}
                    <div className=' mb-10 w-4/6'>
                        <div className='bg-[#ffffff] rounded-t-xl text-xl font-bold
                        text-[#151515] flex py-1'>
                            <h1 className='ml-4'>Items</h1>
                            <h1 className='ml-82'>Current Bid</h1>
                            <h1 className='ml-15'>Time Left</h1>
                            <h1 className='ml-10 mr-4'>Bid Now</h1>
                        </div>
                        <hr />
                        {
                            cards.map(card =><Left key={card.id} card={card} handleHert={handleHert}></Left>)
                        }
                    </div>
                    <div className=' ml-10 text-center  rounded-xl w-2/6 '>
                        <h1 className='text-3xl font-bold text-[#5391fc] bg-[#ffffff] rounded-t-xl'><GiSelfLove className='inline my-13.5 text-[#e02e45]' size={40}/> Favorite Items</h1>
                        <hr className=''/>
                        { 
                            <Empty></Empty>
                         
                        }
                        
                    </div>
                </div>
                
            </div>
        );
    }
};

export default Sections;