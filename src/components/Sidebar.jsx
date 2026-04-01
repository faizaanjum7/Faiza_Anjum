import React, { useState } from 'react';
import {
    Home,
    User,
    Briefcase,
    Code,
    FileText,
    Mail,
    ChevronLeft,
    ChevronRight,
    Sun,
    Moon,
    PenTool
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isDarkMode, toggleDarkMode, activeSection }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const navItems = [
        { name: 'Home', icon: <Home size={18} />, id: 'home' },
        { name: 'About', icon: <User size={18} />, id: 'about' },
        { name: 'Projects', icon: <Briefcase size={18} />, id: 'projects' },
        { name: 'Skills', icon: <Code size={18} />, id: 'skills' },
        { name: 'Blog / Notes', icon: <PenTool size={18} />, id: 'blog' },
        { name: 'Resume', icon: <FileText size={18} />, id: 'resume' },
        { name: 'Contact', icon: <Mail size={18} />, id: 'contact' },
    ];

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                {!isCollapsed && <span className="workspace-name">Faiza's archive</span>}
                <button
                    className="collapse-btn"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    title={isCollapsed ? "Expand" : "Collapse"}
                >
                    {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id} onClick={() => handleScroll(item.id)}>
                            <div className={`nav-item ${activeSection === item.id ? 'active' : ''}`}>
                                <span className="nav-icon">{item.icon}</span>
                                {!isCollapsed && <span className="nav-text">{item.name}</span>}
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="sidebar-footer">
                <button className="theme-toggle" onClick={toggleDarkMode}>
                    <span className="nav-icon">
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </span>
                    {!isCollapsed && <span className="nav-text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
