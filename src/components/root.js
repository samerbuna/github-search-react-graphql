import React from 'react';

import SearchForm from './search-form.js';
import SearchResults from './search-results.js';
import ErrorMessages from './error-messages.js';
import api from '../api.js';

const Root = () => {
  const [currentResp, setCurrentResp] = React.useState({});
  const sendSearchQuery = async query => {
    const resp = await api.request('SearhGitHubUsers', { query });
    setCurrentResp(resp);
  };
  return (
    <div className="root">
      <header className="root-header">GitHub User Search</header>
      <SearchForm onSubmit={sendSearchQuery} />
      {currentResp.errors && <ErrorMessages errors={currentResp.errors} />}
      {currentResp.data && <SearchResults search={currentResp.data.search} />}
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
