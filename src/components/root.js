import React from 'react';
import SearchForm from './search-form.js';
import api from '../api';

const Root = () => {
  const sendSearchQuery = query => {
    api.request('SearhGitHubUsers', { query }).then(resp => {
      console.log(resp);
    });
  };
  return (
    <div className="root">
      <header className="root-header">GitHub User Search</header>
      <SearchForm onSubmit={sendSearchQuery} />
    </div>
  );
};

Root.GraphQL = `
  query SearhGitHubUsers ($query: String!) {
    search(type: USER, query: $query, first: 100) {
      userCount
    }
  }
`;

export default Root;
