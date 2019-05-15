import React from 'react';

const SearchResults = ({ search }) => {
  return (
    <div className="search-results">
      <div className="main">
        <div>Total Users: {search.userCount}</div>
      </div>
    </div>
  );
};

SearchResults.GraphQL = `
  fragment SearchResultsFragment on SearchResultItemConnection {
    userCount
  }
`;

export default SearchResults;
