import Filter from "./Filter";

const SearchSection = ({
    showFilter,
    categories,
    selectedCategory,
    onCategoryChange,
    showFavoriteToggle,
    isFavoriteVisible,
    toggleFavoriteSection,
    searchQuery,
    setSearchQuery,
    inputClassName = "search-input"
  }) => (
    <>
      {showFilter && (
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
      )}
  
      {showFavoriteToggle && (
        <button className="favorite-toggle-button" onClick={toggleFavoriteSection}>
          {isFavoriteVisible ? 'Hide Favorite Cards' : 'Show Favorite Cards'}
        </button>
      )}
  
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={inputClassName}
      />
    </>
  );
  

  export default SearchSection;