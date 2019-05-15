import React from 'react';

import ListUserItem from './list-user-item.js';
import ListOrganizationItem from './list-organization-item';

const SearchResultList = ({ edges }) => {
  return (
    <div className="user-list">
      {edges.map(({ cursor, node }) => {
        switch (node.type) {
          case 'User':
            return <ListUserItem key={cursor} {...node} />;
          case 'Organization':
            return <ListOrganizationItem key={cursor} {...node} />;
          default:
            throw Error(`Unsupported search list item type ${node.type}`);
        }
      })}
    </div>
  );
};

SearchResultList.GraphQL = `
  fragment SearchResultListFragment on SearchResultItemEdge {
    cursor
    node {
      type: __typename
      ... on User {
        ...ListUserItemFragment
      }
      ... on Organization {
        ...ListOrganizationItemFragment
      }
    }
  }

  ${ListUserItem.GraphQL}
  ${ListOrganizationItem.GraphQL}
`;

export default SearchResultList;
