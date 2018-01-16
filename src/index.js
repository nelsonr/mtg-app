import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';

const initialState = {
    players: [
        { name: 'Player 1', life: 20 },
        { name: 'Player 2', life: 20 },
    ]
};

const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_LIFE':
            return Object.assign({}, state, {
                players: state.players.map((player, index) => {
                    if (index === action.index) {
                        player.life = player.life + 1;
                    }
    
                    return player;
                })
            });
        
        case 'DECREMENT_LIFE':
            return Object.assign({}, state, {
                players: state.players.map((player, index) => {
                    if (index === action.index) {
                        player.life = player.life - 1;
                    }

                    return player;
                })
            });
        
        case 'RESET_LIFE':
            return Object.assign({}, state, {
                players: state.players.map((player, index) => {
                    player.life = 20;
                    return player;
                })
            });
    
        default:
            return state;
    }
};
  
const store = createStore(playersReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
