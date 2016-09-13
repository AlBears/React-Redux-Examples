var redux = require('redux');


console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

//Subscribe to changes
store.subscribe(() => {
  var state = store.getState();


  console.log('currentState: ',store.getState());

  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url){
    document.getElementById('app').innerHTML = '<a href="'+state.map.url+'"target="_blank">View Your Location</a>';
  }
});

//we can use unsubscribe too
//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

//Refactor code with action generators
store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Ben'));

store.dispatch(actions.addMovie('Ben-Gur', 'thriller'));

store.dispatch(actions.addMovie('Meet The Fokers', 'comedy'));

store.dispatch(actions.removeMovie(1));
