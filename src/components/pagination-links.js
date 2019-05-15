import React from 'react';

const PaginationLinks = ({
  hasPreviousPage,
  hasNextPage,
  endCursor,
  navigationAction,
}) => {
  const handleNavigation = navType => event => {
    event.preventDefault();
    navigationAction({ navType, endCursor });
  };
  return (
    <div className="pagination-links">
      <button
        onClick={handleNavigation('PREV')}
        className="previous-page"
        disabled={!hasPreviousPage}
      >
        Prev
      </button>
      <button
        onClick={handleNavigation('NEXT')}
        className="next-page"
        disabled={!hasNextPage}
      >
        Next
      </button>
    </div>
  );
};

PaginationLinks.GraphQL = `
  fragment PaginationLinksFragment on PageInfo {
    hasPreviousPage
    hasNextPage
    endCursor
  }
`;

export default PaginationLinks;
