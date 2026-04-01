import React from 'react';

const ProductToggle = () => {
    return (
        <div>
            {/* name of each tab group should be unique */}
<div className="tabs tabs-box rounded-full flex justify-center items-center ">
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 1" />
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 2" defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 3" />
</div>
        </div>
    );
};

export default ProductToggle;