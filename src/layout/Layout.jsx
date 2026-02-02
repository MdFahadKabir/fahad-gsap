import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#242424] text-white">
            <Sidebar />
            <main className="ml-64 p-8 min-h-screen">
                {children}
            </main>
        </div>
    );
};

export default Layout;
