import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export const Nav = () => {
    return (
        <div className="border-b border-gray-500 px-6">
            <div className="flex">
                <div>
                    <p className="text-2xl font-medium">
                        James Muhoro
                    </p>
                </div>
                <div className="ml-auto">
                    <span className='text-xl'>
                        <MenuIcon  />
                    </span>
                </div>
            </div>
        </div>
    );
};
