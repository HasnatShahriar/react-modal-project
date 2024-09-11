import { useState } from 'react';
import './App.css';
import Card from './utils/helper'; 
import { blocksCards, pagesCards, templatesCards } from './utils/helper';


// Modal Component
const Modal = ({ show, onClose, activeSection, onSectionChange }) => {
  if (!show) return null;

  // Function to render cards based on active section
  const renderCards = () => {
    let cards = [];

    switch (activeSection) {
      case 'Blocks':
        cards = blocksCards;
        break;
      case 'Pages':
        cards = pagesCards;
        break;
      case 'My Templates':
        cards = templatesCards;
        break;
      default:
        return <p>Select a section to view cards.</p>;
    }

    // Handle card click event
    const handleCardClick = (index) => {
      // Example: open a page based on card index or content
      alert(`Card ${index + 1} clicked in ${activeSection} section`);
      // Add your logic to open corresponding page or perform actions
    };

    return <Card cards={cards} onClick={handleCardClick} />;
  }; 

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
            <span
              className={`nav-item ${activeSection === 'Blocks' ? 'active' : ''}`}
              onClick={() => onSectionChange('Blocks')}
            >
              Blocks
            </span>
            <span
              className={`nav-item ${activeSection === 'Pages' ? 'active' : ''}`}
              onClick={() => onSectionChange('Pages')}
            >
              Pages
            </span>
            <span
              className={`nav-item ${activeSection === 'My Templates' ? 'active' : ''}`}
              onClick={() => onSectionChange('My Templates')}
            >
              My Templates
            </span>
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
        {renderCards()}
      </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Blocks'); // Default section

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <button onClick={handleOpenModal} className="open-modal-button">
        Open Modal
      </button>
      <Modal
        show={isModalOpen}
        onClose={handleCloseModal}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
    </div>
  );
}

export default App;
