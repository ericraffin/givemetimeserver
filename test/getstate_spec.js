import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setResults} from '../src/core/core.js';

describe('application logic', () => {

  it('adds the results to the state', () => {
    const state = Map();
    const results = List.of(
        Map({author: 'Denis Fortin', title:'Bastion v2', estimate:23, acquired:12,description:'bastion est trop bon'}),
        Map({author: 'Clément Prévost', title:'SteamLearn', estimate:45, acquired:2,description:'Lorem IPSUM'})
      
    );
    const nextState = setResults(state, results);
    expect(nextState).to.equal(Map({
      results: List.of(
        Map({author: 'Denis Fortin', title:'Bastion v2', estimate:23, acquired:12,description:'bastion est trop bon'}),
        Map({author: 'Clément Prévost', title:'SteamLearn', estimate:45, acquired:2,description:'Lorem IPSUM'})
      
      )
    }));
  });
});
