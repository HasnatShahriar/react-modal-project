import { useState } from 'react';
import Modal from './components/Modal'; 
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('blocks'); // Default section

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
