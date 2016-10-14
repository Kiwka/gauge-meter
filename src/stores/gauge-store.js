import 'whatwg-fetch';

export default () => fetch('https://widgister.herokuapp.com/challenge/frontend')
  .then(response => response.json());
