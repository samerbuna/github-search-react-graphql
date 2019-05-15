import React from 'react';

import PaginationLinks from './pagination-links.js';
import UserList from './user-list.js';

const SearchResults = ({ search }) => {
  return (
    <div className="search-results">
      <div className="main">
        <div>Total Users: {search.userCount}</div>
        <UserList edges={search.edges} />
        <PaginationLinks {...search.pageInfo} />
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
      ...UserListFragment
    }
  }

  ${PaginationLinks.GraphQL}
  ${UserList.GraphQL}
`;

export default SearchResults;
