// import { useState } from 'react';
// import './App.css';
// // import Card from './utils/helper';
// import { blocksCards, pagesCards, templatesCards } from './utils/helper';
// import Filter from './components/Filter';
// import Card from './components/Card';
// import FavoriteSection from './components/FavoriteSection';


// // Modal Component
// const Modal = ({ show, onClose, activeSection, onSectionChange }) => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');


//   if (!show) return null;

//   const getCategories = () => {
//     // Mock categories for example purposes
//     return ['Category 1', 'Category 2', 'Category 3'];
//   };

//   const filterCards = (cards) => {
//     if (selectedCategory) {
//       cards = cards.filter(card => card.category === selectedCategory);
//     }
//     if (searchQuery) {
//       cards = cards.filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()));
//     }
//     return cards;
//   };

//   // Function to render cards based on active section
//   const renderCards = () => {
//     let cards = [];

//     switch (activeSection) {
//       case 'Blocks':
//         cards = blocksCards;
//         break;
//       case 'Pages':
//         cards = pagesCards;
//         break;
//       case 'My Templates':
//         cards = templatesCards;
//         break;
//       default:
//         return <p>Select a section to view cards.</p>;
//     }

//     // Apply the selected category filter and search query
//     cards = filterCards(cards);

//     // Handle card click event
//     const handleCardClick = (index) => {
//       // Example: open a page based on card index or content
//       alert(`Card ${index + 1} clicked in ${activeSection} section`);
//     };

//     return <Card cards={cards} onClick={handleCardClick} />;
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <nav className="modal-navbar">
//           {/* Left Part: Logo + Name */}
//           <div className="nav-left">
//             <div className="nav-logo">L</div>
//             <span className="nav-name">ABlock</span>
//           </div>

//           {/* Middle Part: Navigation Links */}
//           <div className="nav-middle">
//             <span
//               className={`nav-item ${activeSection === 'Blocks' ? 'active' : ''}`}
//               onClick={() => onSectionChange('Blocks')}
//             >
//               Blocks
//             </span>
//             <span
//               className={`nav-item ${activeSection === 'Pages' ? 'active' : ''}`}
//               onClick={() => onSectionChange('Pages')}
//             >
//               Pages
//             </span>
//             <span
//               className={`nav-item ${activeSection === 'My Templates' ? 'active' : ''}`}
//               onClick={() => onSectionChange('My Templates')}
//             >
//               My Templates
//             </span>
//           </div>

//           {/* Right Part: Icons + Close Button */}
//           <div className="nav-right">
//             <span className="nav-icon">📥</span> {/* Import Template Icon */}
//             <span className="nav-icon">🔄</span> {/* Sync Library Icon */}
//             <span className="nav-icon">💾</span> {/* Save Icon */}
//             <button className="close-button" onClick={onClose}>
//               &times;
//             </button>
//           </div>
//         </nav>

//         <div className="modal-header">
//           {activeSection === 'Blocks' && (
//             <>
//               <div className="filter-container">
//                 <Filter
//                   categories={getCategories()}
//                   selectedCategory={selectedCategory}
//                   onCategoryChange={setSelectedCategory}
//                 />
//               </div>
//               <div className="favorite-container">
//                 <FavoriteSection
//                   // categories={getCategories()}
//                   // selectedCategory={selectedCategory}
//                   // onCategoryChange={setSelectedCategory}
//                 />
//               </div>
//               <div className="search-container">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="search-input"
//                 />
//               </div>
//             </>
//           )}
//         </div>

//         {renderCards()}
//       </div>
//     </div>
//   );
// };

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('Blocks'); // Default section

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className="App">
//       <button onClick={handleOpenModal} className="open-modal-button">
//         Open Modal
//       </button>
//       <Modal
//         show={isModalOpen}
//         onClose={handleCloseModal}
//         activeSection={activeSection}
//         onSectionChange={handleSectionChange}
//       />
//     </div>
//   );
// }

// export default App;










import { useState } from 'react';
import './App.css';
import { blocksCards, pagesCards, templatesCards } from './utils/helper';
import Filter from './components/Filter';
import Card from './components/Card';
import FavoriteSection from './components/FavoriteSection';

// Modal Component
const Modal = ({ show, onClose, activeSection, onSectionChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFavoriteVisible, setIsFavoriteVisible] = useState(false); // State for toggling Favorite Section visibility
  const [favoriteCards, setFavoriteCards] = useState([]); // State to manage favorite cards

  if (!show) return null;

  const getCategories = () => {
    return ['Category 1', 'Category 2', 'Category 3']; // Mock categories
  };

  const filterCards = (cards) => {
    if (selectedCategory) {
      cards = cards.filter((card) => card.category === selectedCategory);
    }
    if (searchQuery) {
      cards = cards.filter((card) => card.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return cards;
  };

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

    // Apply filters and search
    cards = filterCards(cards);

    // Handle card click event for adding/removing favorites
    const handleCardClick = (index) => {
      const clickedCard = cards[index];
      if (favoriteCards.includes(clickedCard)) {
        setFavoriteCards(favoriteCards.filter((card) => card !== clickedCard)); // Remove from favorites
      } else {
        setFavoriteCards([...favoriteCards, clickedCard]); // Add to favorites
      }
    };

    return <Card cards={cards} onClick={handleCardClick} favoriteCards={favoriteCards} />;
  };

  // Toggle favorite section visibility
  const toggleFavoriteSection = () => {
    setIsFavoriteVisible(!isFavoriteVisible);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <nav className="modal-navbar">
          <div className="nav-left">
            <div className="nav-logo">L</div>
            <span className="nav-name">ABlock</span>
          </div>
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
          <div className="nav-right">
            <span className="nav-icon">📥</span>
            <span className="nav-icon">🔄</span>
            <span className="nav-icon">💾</span>
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
        </nav>

        {/* Show Favorite Section if toggled */}
        {isFavoriteVisible ? (
          <div className="favorite-container">
            <button className="favorite-toggle-button" onClick={toggleFavoriteSection}>
              {isFavoriteVisible ? 'Hide Favorite Card' : 'Show Favorite Card'}
            </button>
            <FavoriteSection favoriteCards={favoriteCards.filter((card) => blocksCards.includes(card))} />
          </div>
        ) : (
          <>
            {/* Show Filter, Favorite Button, and Search in one row */}
            {activeSection === 'Blocks' && (
              <div className="options-container">
                <Filter
                  categories={getCategories()}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
                <button className="favorite-toggle-button" onClick={toggleFavoriteSection}>
                  {isFavoriteVisible ? 'Hide Favorite Card' : 'Show Favorite Card'}
                </button>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            )}

            {/* Render Cards for all sections */}
            {renderCards()}
          </>
        )}
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
