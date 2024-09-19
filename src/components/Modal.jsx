import { useState } from 'react';
import Card from './Card';
import FavoriteSection from './FavoriteSection';
import Navbar from './Navbar';
import { blocksCards, pagesCards, templatesCards } from '../utils/helper';
import SearchSection from './SearchSection';


const Modal = ({ show, onClose, activeSection, onSectionChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isFavoriteVisible, setIsFavoriteVisible] = useState(false);

    const [favoriteBlocksCards, setFavoriteBlocksCards] = useState([]);
    const [favoritePagesCards, setFavoritePagesCards] = useState([]);
    const [favoriteTemplatesCards, setFavoriteTemplatesCards] = useState([]);

    if (!show) return null;

    const getCategories = () => {
        return ['Category 1', 'Category 2', 'Category 3']; // Mock categories
    };

    const filterCards = (cards) => {
        if (selectedCategory) {
            cards = cards.filter((card) => card.category === selectedCategory);
        }
        if (searchQuery) {
            cards = cards.filter((card) => (card.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()));
        }
        return cards;
    };

    const renderCards = () => {
        let cards = [];

        switch (activeSection) {
            case 'blocks':
                cards = blocksCards;
                break;
            case 'pages':
                cards = pagesCards;
                break;
            case 'templates':
                cards = templatesCards;
                break;
            default:
                cards = blocksCards;
                break;
        }

        cards = filterCards(cards);

        const handleCardClick = (index) => {
            const clickedCard = cards[index];

            if (activeSection === 'blocks') {
                if (favoriteBlocksCards.includes(clickedCard)) {
                    setFavoriteBlocksCards(favoriteBlocksCards.filter((card) => card !== clickedCard));
                } else {
                    setFavoriteBlocksCards([...favoriteBlocksCards, clickedCard]);
                }
            } else if (activeSection === 'pages') {
                if (favoritePagesCards.includes(clickedCard)) {
                    setFavoritePagesCards(favoritePagesCards.filter((card) => card !== clickedCard));
                } else {
                    setFavoritePagesCards([...favoritePagesCards, clickedCard]);
                }
            } else if (activeSection === 'templates') {
                if (favoriteTemplatesCards.includes(clickedCard)) {
                    setFavoriteTemplatesCards(favoriteTemplatesCards.filter((card) => card !== clickedCard));
                } else {
                    setFavoriteTemplatesCards([...favoriteTemplatesCards, clickedCard]);
                }
            }
        };

        if (activeSection === 'templates' && cards.length === 0) {
            return (
                <div>
                    <p className="no-templates-message">Haven't Saved Templates Yet !!</p>
                    <p className="no-templates-message-info">This is where your templates should be. Design it, Save it, Reuse it</p>
                </div>
            );
        }

        return <Card cards={cards} onClick={handleCardClick} />;
    };

    const toggleFavoriteSection = () => {
        setIsFavoriteVisible(!isFavoriteVisible);
    };

    const renderFavoriteSection = () => {
        let favoriteCards = [];
        switch (activeSection) {
            case 'blocks':
                favoriteCards = favoriteBlocksCards;
                break;
            case 'pages':
                favoriteCards = favoritePagesCards;
                break;
            case 'templates':
                favoriteCards = favoriteTemplatesCards;
                break;
            default:
                favoriteCards = [];
        }
        return <FavoriteSection data={favoriteCards} />;
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <Navbar activeSection={activeSection} onSectionChange={onSectionChange} onClose={onClose} />

                {isFavoriteVisible ? (
                    <div className="favorite-container">
                        <button className="favorite-toggle-button" onClick={toggleFavoriteSection}>
                            {isFavoriteVisible ? 'Hide Favorite Cards' : 'Show Favorite Cards'}
                        </button>
                        {renderFavoriteSection()}
                    </div>
                ) : (
                    <>
                        <div className="options-container">
                            {/* Blocks Section */}
                            {activeSection === 'blocks' && (
                                <SearchSection
                                    showFilter={true}
                                    categories={getCategories()}
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={setSelectedCategory}
                                    showFavoriteToggle={true}
                                    isFavoriteVisible={isFavoriteVisible}
                                    toggleFavoriteSection={toggleFavoriteSection}
                                    searchQuery={searchQuery}
                                    setSearchQuery={setSearchQuery}
                                />
                            )}

                            {/* Pages Section */}
                            {activeSection === 'pages' && (
                                <SearchSection
                                    showFilter={false}
                                    showFavoriteToggle={true}
                                    isFavoriteVisible={isFavoriteVisible}
                                    toggleFavoriteSection={toggleFavoriteSection}
                                    searchQuery={searchQuery}
                                    setSearchQuery={setSearchQuery}
                                />
                            )}

                            {/* My Templates Section */}
                            {activeSection === 'templates' && (
                                <SearchSection
                                    showFilter={false}
                                    showFavoriteToggle={false}
                                    searchQuery={searchQuery}
                                    setSearchQuery={setSearchQuery}
                                    inputClassName="search-input my-templates-search-input"
                                />
                            )}
                        </div>


                        {renderCards()}
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
