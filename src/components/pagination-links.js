import React from 'react';

const PaginationLinks = ({
  hasPreviousPage,
  hasNextPage,
  startCursor,
  endCursor,
}) => {
  return <div className="pagination-links">Prev/Next</div>;
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
