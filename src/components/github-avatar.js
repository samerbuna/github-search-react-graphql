import React from 'react';

const GitHubAvatar = ({ login, src }) => (
  <a
    href={`https://github.com/${login}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className="avatar"
      src={src}
      alt={`@${login}`}
      height="96"
      width="96"
    />
  </a>
);

export default GitHubAvatar;
