import React from 'react';

import UserInfo from './user-info.js';

const UserList = ({ edges }) => {
  return (
    <div className="user-list">
      {edges.map(({ cursor, node }) => (
        <UserInfo key={cursor} {...node} />
      ))}
    </div>
  );
};

UserList.GraphQL = `
  fragment UserListFragment on SearchResultItemEdge {
    cursor
    node {
      ... on User {
        ...UserInfoFragment
      }
    }
  }

  ${UserInfo.GraphQL}
`;

export default UserList;
