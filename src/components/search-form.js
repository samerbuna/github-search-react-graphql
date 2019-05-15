import React from 'react';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    onSubmit(form.query.value);
  };
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input type="search" name="query" placeholder="Search GitHub Users" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
