import React from 'react';

const SearchForm = ({ onSubmit }) => {
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    await onSubmit(form.query.value);
    setLoading(false);
  };
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input type="search" name="query" placeholder="Search GitHub Users" />
        <button type="submit" disabled={loading}>
          {loading ? 'Search...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
