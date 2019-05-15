import React from 'react';

import GitHubAvatar from './github-avatar.js';

const ListUserItem = ({
  login,
  name,
  bio,
  location,
  company,
  avatarUrl,
  followers,
}) => {
  return (
    <div className="user-list-item">
      <div className="user-avatar">
        <GitHubAvatar src={avatarUrl} login={login} />
      </div>

      <div className="user-main-info">
        <div className="user-name">
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {login}
          </a>
          <div>{name}</div>
        </div>
        {followers && (
          <div className="user-followers">{followers.totalCount} followers</div>
        )}
        <div className="user-bio">{bio}</div>
      </div>

      <div className="user-location-info">
        <div>{company}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

ListUserItem.GraphQL = `
  fragment ListUserItemFragment on User {
    login
    name
    bio
    location
    company
    avatarUrl(size: 96)
    followers {
      totalCount
    }
  }
`;

export default ListUserItem;
