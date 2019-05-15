import React from 'react';

import SearchForm from './search-form.js';
import SearchResults from './search-results.js';
import ErrorMessages from './error-messages.js';
import api from '../api.js';

const PER_PAGE = 100;

const Root = () => {
  const [currentResp, setCurrentResp] = React.useState({});
  const pageRef = React.useRef();

  const sendSearchQuery = async (query, navVars) => {
    if (!navVars) {
      // First page requset
      navVars = { first: PER_PAGE };
      pageRef.current = {
        currentPageNumber: 1,
        cursors: { 1: { after: undefined } },
      };
    }
    setCurrentResp({ loading: true });
    const resp = await api.request(`SearhGitHubUsers`, {
      query,
      ...navVars,
    });
    setCurrentResp({
      query,
      data: resp.data,
      errors: resp.errors,
    });
  };

  const fetchPage = ({ navType, endCursor }) => {
    let afterCursor;
    const pageData = pageRef.current;

    if (navType === 'NEXT') {
      pageData.currentPageNumber = pageData.currentPageNumber + 1;
      pageData.cursors[pageData.currentPageNumber] = { after: endCursor };
      afterCursor = endCursor;
    }

    if (navType === 'PREV') {
      pageData.currentPageNumber = pageData.currentPageNumber - 1;
      afterCursor = pageData.cursors[pageData.currentPageNumber].after;
    }

    // Remember the curret page start cursor for a subsequent "prev" nav
    pageRef.current = pageData;

    sendSearchQuery(currentResp.query, {
      first: PER_PAGE,
      after: afterCursor,
    });
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
  query SearhGitHubUsers ($query: String!, $first: Int!, $after: String) {
    search(type: USER, query: $query, first: $first, after: $after) {
      ...SearchResultsFragment
    }
  }

  ${SearchResults.GraphQL}
`;

export default Root;
