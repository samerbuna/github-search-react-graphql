import React from 'react';

const UserInfo = ({ name }) => {
  return (
    <div className="user-info">
      <div>{name}</div>
    </div>
  );
};

UserInfo.GraphQL = `
  fragment UserInfoFragment on User {
    name
  }
`;

export default UserInfo;
