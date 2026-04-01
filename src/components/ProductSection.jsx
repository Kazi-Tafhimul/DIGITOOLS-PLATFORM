import React, { Suspense, useState } from 'react';
import CardSection from './CardSection';
import ProductToggle from './ProductToggle';

const ProductSection = () => {
    
    const cardInfo = async()=>{
        const res = await fetch("/data.json")
        return res.json();

        
                   
    }
    const cardData = cardInfo();
    return (
        <div>
            <ProductToggle></ProductToggle>
            <div className='font-bold text-center text-5xl mt-15'>Premium Digital Tools</div>
            <p className='font-medium text-center text-gray-400 mt-10'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <Suspense fallback = {<p className='text-center'>loading cards</p>}>
                <CardSection cardData={cardData}></CardSection>
            </Suspense>

            
        </div>
    );
};

export default ProductSection;