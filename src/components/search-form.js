import React from 'react';

const SearchForm = () => {
  return (
    <div className="search-form">
      <form>
        <input type="search" placeholder="Search GitHub Users" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
