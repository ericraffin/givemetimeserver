export const INITIAL_STATE = {};

export function setProjectsList(state, projectsList) {
  return Object.assign({}, state, {'projectsList':projectsList});
}

export function setUser(state, user) {
  return Object.assign({}, state, {'user':user});
}