import axios from 'axios';
import Root from './components/root.js';

const GraphQLEndPoint = 'https://api.github.com/graphql';
const token = process.env.REACT_APP_GITHUB_TOKEN;

const request = (operationName, variables = {}) => {
  return (
    axios
      .post(
        GraphQLEndPoint,
        {
          query: Root.GraphQL,
          variables,
          operationName,
        },
        {
          headers: { Authorization: 'bearer ' + token },
        }
      )
      // unwrap axios resp
      .then(resp => resp.data)
  );
};

export default {
  request,
};
