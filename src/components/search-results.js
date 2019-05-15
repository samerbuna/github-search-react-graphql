import React from 'react';

import PaginationLinks from './pagination-links.js';
import SearchResultList from './search-result-list.js';

const SearchResults = ({ search, navigationAction }) => {
  return (
    <div className="search-results">
      <div className="main">
        <div className="total-count">Total Matching: {search.userCount}</div>
        <SearchResultList edges={search.edges} />
        <PaginationLinks
          {...search.pageInfo}
          navigationAction={navigationAction}
        />
      </div>
    </div>
  );
};

SearchResults.GraphQL = `
  fragment SearchResultsFragment on SearchResultItemConnection {
    userCount
    pageInfo {
      ...PaginationLinksFragment
    }
    edges {
      ...SearchResultListFragment
    }
  }

  ${PaginationLinks.GraphQL}
  ${SearchResultList.GraphQL}
`;

export default SearchResults;
