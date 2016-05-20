import {setProjectsList, setUser, INITIAL_STATE} from './core/core.js';

export default function reducer(state = INITIAL_STATE, action) {
  // Figure out which function to call and call it
    switch (action.type) {
	  case 'SET_PROJECTSLIST':
	    return setProjectsList(state, action.projectsList);
	  case 'SET_USER':
	    return setUser(state, action.user);
	  }
	  return state;
}