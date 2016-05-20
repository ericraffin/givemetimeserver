import makeStore from './src/store';
import startServer from './src/server';

const store = makeStore();
store.dispatch({
  type: 'SET_USER',
  user: require('./user.json')
});
store.dispatch({
  type: 'SET_PROJECTSLIST',
  projectsList: require('./results.json')
});

startServer(store);