// src/App.jsx
import { useState } from 'react';
import './App.css';

// Modal Component
const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <nav className="modal-navbar">
          {/* Left Part: Logo + Name */}
          <div className="nav-left">
            <div className="nav-logo">L</div>
            <span className="nav-name">ABlock</span>
          </div>

          {/* Middle Part: Navigation Links */}
          <div className="nav-middle">
            <span className="nav-item">Blocks</span>
            <span className="nav-item">Pages</span>
            <span className="nav-item">My Templates</span>
          </div>

          {/* Right Part: Icons + Close Button */}
          <div className="nav-right">
            <span className="nav-icon">📥</span> {/* Import Template Icon */}
            <span className="nav-icon">🔄</span> {/* Sync Library Icon */}
            <span className="nav-icon">💾</span> {/* Save Icon */}
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
        </nav>

        <h2>Modal Title</h2>
        <p>This is the content of the modal with a custom navbar.</p>
      </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={handleOpenModal} className="open-modal-button">
        Open Modal
      </button>
      <Modal show={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
