import React from 'react';

import SearchForm from './search-form.js';
import SearchResults from './search-results.js';
import ErrorMessages from './error-messages.js';
import api from '../api.js';

const PER_PAGE = 100;

const Root = () => {
  const [currentResp, setCurrentResp] = React.useState({});

  const sendSearchQuery = async (query, { navType, ...navVars } = {}) => {
    if (!navType) {
      // First page requset
      navType = 'NEXT';
      navVars = { first: PER_PAGE };
    }
    setCurrentResp({ loading: true });

    const resp = await api.request(`SearhGitHubUsers${navType}`, {
      query,
      ...navVars,
    });

    setCurrentResp({ query, data: resp.data, errors: resp.errors });
  };

  const fetchPage = ({ navType, startCursor, endCursor }) => {
    if (navType === 'NEXT') {
      return sendSearchQuery(currentResp.query, {
        navType: 'NEXT',
        first: PER_PAGE,
        after: endCursor,
      });
    }
    if (navType === 'PREV') {
      return sendSearchQuery(currentResp.query, {
        navType: 'PREV',
        last: PER_PAGE,
        before: startCursor,
      });
    }
    throw Error(`Unsupported fetchPage call`);
  };

  return (
    <div className="root">
      <header className="root-header">GitHub User Search</header>
      <SearchForm disabled={currentResp.loading} onSubmit={sendSearchQuery} />
      {currentResp.loading && <div className="loading">Loading...</div>}
      {currentResp.errors && <ErrorMessages errors={currentResp.errors} />}
      {currentResp.data && (
        <SearchResults
          search={currentResp.data.search}
          navigationAction={fetchPage}
        />
      )}
    </div>
  );
};

Root.GraphQL = `
  query SearhGitHubUsersNEXT ($query: String!, $first: Int!, $after: String) {
    search(type: USER, query: $query, first: $first, after: $after) {
      ...SearchResultsFragment
    }
  }

  query SearhGitHubUsersPREV ($query: String!, $last: Int!, $before: String) {
    search(type: USER, query: $query, last: $last, before: $before) {
      ...SearchResultsFragment
    }
  }

  ${SearchResults.GraphQL}
`;

export default Root;
