import React from 'react';

import GitHubAvatar from './github-avatar.js';

const ListOrganizationItem = ({
  login,
  name,
  description,
  location,
  avatarUrl,
  websiteUrl,
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
        {websiteUrl && (
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            {websiteUrl}
          </a>
        )}
        <div className="user-bio">{description}</div>
      </div>

      <div className="user-location-info">
        <div>{location}</div>
      </div>
    </div>
  );
};

ListOrganizationItem.GraphQL = `
  fragment ListOrganizationItemFragment on Organization {
    login
    name
    description
    location
    websiteUrl
    avatarUrl(size: 96)
  }
`;

export default ListOrganizationItem;
