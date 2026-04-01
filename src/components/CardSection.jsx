import React, { use } from 'react';

const CardSection = ({cardData}) => {
    const cards = use(cardData)
    console.log(cards); 
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-10'>
            {cards.map((card)=>(
                <div key={card.id} className="card w-full bg-base-100 shadow-sm border border-gray-200">
  <div className="card-body">
    <div className='flex justify-end'>
        <span className="badge badge-xs badge-warning flex justify-end">{card.badge}</span>
    </div>
    <div>
        <img src={card.icon}/>
    </div>
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold">{card.title}</h2>
      <p className='text-lg font-normal text-gray-500 mt-10 mb-10'>{card.description}</p>
      <div className="text-xl"><span className='font-bold'>${card.price}</span>{card.priceType}</div>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
        
     {card.features.map((feature,index) => (
         <li key = {index} className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
     ))}
       
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-full">Buy Now</button>
    </div>
  </div>
</div>
            ))}
        </div>
    );
};

export default CardSection;