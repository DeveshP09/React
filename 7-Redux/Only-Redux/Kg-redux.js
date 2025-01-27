const redux = require('redux') ;

const INITIAL_VALUE = {
counter : 0 ,
};

const reducer = (store = INITIAL_VALUE, action) => {     
     //Action is processed by the reducer
    let newStore = store;
    if(action.type === 'Increment'){
        newStore = {counter :store.counter + 1};
    }
    else if(action.type ==='Addition'){
        newStore = {counter : store.counter + action.payload.number}
    }
    return newStore;
}

const store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);
store.dispatch({type : 'Increment'});      //dispatch action
store.dispatch({type : 'Increment'});
store.dispatch({type : 'Addition' ,payload : {number : 8}});
