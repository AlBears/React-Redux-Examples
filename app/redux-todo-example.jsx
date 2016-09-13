var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action)=>{
  //state = state || {name: 'Anonymous'};
  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
      default:
        return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


//subscribe to changes in our store
store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML=state.searchText;
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'GGG'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'PACMAN'
});


var currentState = store.getState();
console.log('currentState', currentState);

console.log('SearchText should be GGG', store.getState());
