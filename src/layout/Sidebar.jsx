import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Move, Type, MousePointer, Layers, Sparkles, Activity, Clock, Grid } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { path: '/', label: 'Home', icon: <Layout size={20} /> },
        { path: '/core', label: 'Core Animations', icon: <Move size={20} /> },
        { path: '/scroll', label: 'Scroll Animations', icon: <Layers size={20} /> },
        { path: '/text', label: 'Text Animations', icon: <Type size={20} /> },
        { path: '/ui', label: 'UI Animations', icon: <MousePointer size={20} /> },
        { path: '/advanced', label: 'Advanced', icon: <Sparkles size={20} /> },
        { path: '/physics', label: 'Physics', icon: <Activity size={20} /> },
        { path: '/timelines', label: 'Timelines', icon: <Clock size={20} /> },
        { path: '/layout', label: 'Layout', icon: <Grid size={20} /> },
    ];

    return (
        <div className="w-64 h-screen bg-[#1a1a1a] border-r border-white/10 fixed left-0 top-0 overflow-y-auto">
            <div className="p-6">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    GSAP Library
                </h1>
            </div>
            <nav className="px-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${isActive
                                ? 'bg-blue-600/20 text-blue-400'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`
                        }
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
