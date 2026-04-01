import React from 'react';

const ProductToggle = () => {
    return (
        <div className='flex justify-center items-center py-10'>
            {/* name of each tab group should be unique */}
<div className="tabs tabs-box bg-white border border-gray-200 rounded-full p-1">
  <input type="radio" name="product_toggle" className="tab !rounded-full px-8 checked:bg-gradient-to-r from-blue-600 to-purple-600 checked:!text-white" aria-label="Products"/>
  <input type="radio" name="product_toggle" className="tab !rounded-full px-8 checked:bg-gradient-to-r from-blue-600 to-purple-600 checked:!text-white" aria-label="Cart(2)" defaultChecked />
  
</div>
        </div>
    );
};

export default ProductToggle;