import React from 'react';

const SearchForm = ({ disabled, onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    onSubmit(form.query.value);
  };
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input type="search" name="query" placeholder="Search GitHub Users" />
        <button type="submit" disabled={disabled}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
