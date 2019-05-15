import React from 'react';

const PaginationLinks = ({
  hasPreviousPage,
  hasNextPage,
  startCursor,
  endCursor,
  navigationAction,
}) => {
  const handleNavigation = navType => event => {
    event.preventDefault();
    navigationAction({ navType, startCursor, endCursor });
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
    startCursor
    endCursor
  }
`;

export default PaginationLinks;
