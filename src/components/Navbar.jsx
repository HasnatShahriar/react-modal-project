import React from 'react';

const tabs = [{
    label: 'Blocks',
    value: 'blocks'
},
{
    label: 'Pages',
    value: 'pages'
},
{
    label: 'My Templates',
    value: 'templates'
}]
const Navbar = ({ onSectionChange, activeSection, onClose }) => {
    return (
        <nav className="modal-navbar">
            <div className="nav-left">
                <div className="nav-logo">L</div>
                <span className="nav-name">ABlock</span>
            </div>
            <div className="nav-middle">
                {
                    tabs.map((tab, index) => {
                        return (
                            <span
                                key={index}
                                className={`nav-item ${activeSection === tab.value ? 'active' : ''}`}
                                onClick={() => onSectionChange(tab.value)}
                            >
                                {tab.label}
                            </span>
                        )
                    })
                }


            </div>
            <div className="nav-right">
                <span className="nav-icon">📥</span>
                <span className="nav-icon">🔄</span>
                <span className="nav-icon">💾</span>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
            </div>
        </nav>
    );
};

export default Navbar;