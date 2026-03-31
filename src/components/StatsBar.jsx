import React from 'react';

const StatsBar = () => {
    const stats = [
        {value: '50K+', label:'Active Users'},
        {value: '200+', label:'Premium Tools'},
        {value: '4.9', label:'Rating'}

    ]
    return (
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-6 md:px-12'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 text-center'>
                   {stats.map((stat,index)=>(
                     <div key={index} className='space-y-2 py-8 md:py-0 md:px-12 text-center'>
                        <p className='text-5xl font-bold text-white'>
                            {stat.value}
                        </p>
                        <p className='text-white text-lg md:text-xl font-medium'>
                            {stat.label}
                        </p>
                     </div>
                   ))}
                </div>

            </div>
            

            
        </div>
    );
};

export default StatsBar;